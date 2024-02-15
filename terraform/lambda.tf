resource "random_id" "id" {
  byte_length = 8
}

resource "aws_cloudfront_function" "rewrite_uri" {
  name    = "rewrite-request-${random_id.id.hex}"
  runtime = "cloudfront-js-1.0"
  code    = <<EOF
    function isCloudFrontURL(headers) {
        if(headers && headers["host"]) {
            if(headers["host"].value.includes("cloudfront"))
                return true
            else if(headers["host"].multiValue)
                return headers["host"].multiValue.some(entry => entry.value.includes("cloudfront"))
        }
        return false
    }

    function handler(event) {
        var request = event.request;
        var uri = request.uri;

        var host = request.headers.host.value;

        if (isCloudFrontURL(request.headers)) {
            return {
                statusCode: 404,
                statusDescription: 'Page not found',
                headers: {
                    "content-type": { 
                        "value": "text/plain; charset=UTF-8" 
                    }
                }
            }
        }

        if (host === 'www.${var.domain_name}') {
            return {
                statusCode: 301,
                statusDescription: 'Redirect to non www',
                headers: {
                    'cloudfront-functions': { value: 'generated-by-CloudFront-Functions' },
                    'location': { value: `https://${var.domain_name}$${uri}` }
                }
            };
        }


        // Check whether the URI is missing a file name.
        if (uri.endsWith('/')) {
            request.uri += 'index.html';
        } 
        //
        // Check whether the URI is missing a file extension. 
        else if (!uri.includes('.')) {
            return {
                statusCode: 301,
                statusDescription: 'Redirect to slash',
                headers: {
                    'cloudfront-functions': { value: 'generated-by-CloudFront-Functions' },
                    'location': { value: `https://${var.domain_name}$${uri}/` }
                }
            };
        }

        return request;
    }
EOF
}