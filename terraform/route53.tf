resource "aws_route53_zone" "my_hosted_zone" {
  name = var.domain_name
}

resource "aws_route53_record" "my_validation_record" {
  zone_id = aws_route53_zone.my_hosted_zone.zone_id
  name    = tolist(aws_acm_certificate.my_certificate_request.domain_validation_options).0.resource_record_name
  type    = tolist(aws_acm_certificate.my_certificate_request.domain_validation_options).0.resource_record_type
  records = [tolist(aws_acm_certificate.my_certificate_request.domain_validation_options).0.resource_record_value]
  ttl     = 60
}

resource "aws_acm_certificate_validation" "my_certificate_validation" {
  certificate_arn         = aws_acm_certificate.my_certificate_request.arn
  validation_record_fqdns = [aws_route53_record.my_validation_record.fqdn]
}

resource "aws_route53_record" "non-www" {
  zone_id = aws_route53_zone.my_hosted_zone.zone_id
  name    = var.domain_name
  type    = "A"

  alias {
    name                   = replace(aws_cloudfront_distribution.blog.domain_name, "/[.]$/", "")
    zone_id                = "${aws_cloudfront_distribution.blog.hosted_zone_id}"
    evaluate_target_health = true
  }

  depends_on = [aws_cloudfront_distribution.blog]
}

resource "aws_route53_record" "www" {
  zone_id = aws_route53_zone.my_hosted_zone.zone_id
  name    = "www.${var.domain_name}"
  type    = "A"

  alias {
    name                   = replace(aws_cloudfront_distribution.blog.domain_name, "/[.]$/", "")
    zone_id                = "${aws_cloudfront_distribution.blog.hosted_zone_id}"
    evaluate_target_health = true
  }

  depends_on = [aws_cloudfront_distribution.blog]
}