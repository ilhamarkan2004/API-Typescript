import 'dotenv/config'

const CONFIG = {
  db: process.env.DB,
  jwt_public: `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAp3iWYqUZCDpA5g8jAYgW
KiX0PFXtNecOE9TRhIdDVcrl7J4iKC+JJEEgPyOIo+nGZ5USNSEse+yCNrAuhKAh
8T+CxojYVY5FAwqJ5RwxU4cX0gXVPXZjgS4JpEKJ48UKO1JVF7l0w7NREIzVjj30
BkCGFkRZoZPF2Zl5qYzEbgLrOJY0NSbrusn+x0sVM1w98sBMIOldzWS5OQwDzWdc
k8ofMmF057hTTmA2LkpkJtqn/zj1APpUruhmzHQ72604t4cKnpqSyHpBTJsThT5K
ImYIwgPpYDaaQs50JgU77u1ZS3puuJpb5gfE92Naise0CQz7XvjVXFxHZkLnWke9
UwIDAQAB
-----END PUBLIC KEY-----`,
  jwt_private: `-----BEGIN RSA PRIVATE KEY-----
MIIEowIBAAKCAQEAp3iWYqUZCDpA5g8jAYgWKiX0PFXtNecOE9TRhIdDVcrl7J4i
KC+JJEEgPyOIo+nGZ5USNSEse+yCNrAuhKAh8T+CxojYVY5FAwqJ5RwxU4cX0gXV
PXZjgS4JpEKJ48UKO1JVF7l0w7NREIzVjj30BkCGFkRZoZPF2Zl5qYzEbgLrOJY0
NSbrusn+x0sVM1w98sBMIOldzWS5OQwDzWdck8ofMmF057hTTmA2LkpkJtqn/zj1
APpUruhmzHQ72604t4cKnpqSyHpBTJsThT5KImYIwgPpYDaaQs50JgU77u1ZS3pu
uJpb5gfE92Naise0CQz7XvjVXFxHZkLnWke9UwIDAQABAoIBAEM6qHxfNKZV5Fm2
t+HUhLlU1TAnenuKDt+tLpLaThCxzA1qCeJB+vb/4fcWx7KtlUVd1ZpYf+gbsMZN
gc8iDZ4wVcpngxkNbOzknSjJYY/bipd4Wfs7fISOO7aiM4KpRgs8aQaGH7a0VJWl
Q9G/UyfzXSCxPZ4cmW9aKjoDVZOnlqziFAdlo/wYDVF53ja7WCqtjePGQrHL1rMv
1dB/KsYsft3xyGlnKSke6X6btVCneNAKfeJsPnBioAsAMbeqldfeS38/b8mjMUH2
b3j+7D1/x9yFs/y5qdzixm2HrFUiPQJtCKzgb+7mI73H1JihN7PuZ2ASH/NyfagO
rjfdHlECgYEA66kL5+PFjBbw1sS40XuKCP26UpvzLy0j/YjoZlcJ97t3qRjng/UW
M1A2yO0xaxknne43JgIhO4HgHwXKZ2gzsk1qTwMskoxjnRQ+crCG3O69vaMoRxUa
ROAYp5XLoDLgHLXCI9zntq1tIB1CYuOtXljpCj0ERezhkPSbLGhptBsCgYEAtezj
LW26gtZ+xnnbGbSiQYJfF0WnStWNKVdGX1lqruQQcH2O27vEYW//lGAnxhJkPLLy
8Oq5XlWRq8e2RKooQDlSdg7TD8iJ8HeJCLgp0O93PQmcWftX5eNXXwOqtRgbREP2
tnCI3Ut2CpDcuUGYkztpgxhsnXiVMrd6YiYJ/ykCgYBu67eF40i1Yorjm96eAzb6
emq7vVmeZ/HbwRgaK3eumhd9iRJXowFbD7NpqXMsRL/H7zsX8cKwnrXeBDy7pWlH
0HZsUEMni1rLsZ6fHwWrcdfvLZ+krYMazhvsrW4VrjycZtTFSpHqAwEtL3hy0VVl
5hVyUzvyqceWEfwDz/WI5wKBgDqYy2+VeU6tMfZRx42XDfAVwvUm/URwVmBreQI7
Nc6RLO5essX5y74qqeKrugPlZp3acb/BiuVkoF/5Gq8xM3fEPthB3B+oUy2+Ashp
MSbYCssBLngZKe2k9T5oWvKrihTJ40xOIPdOV/39POr6wt8hctHD6zApZ70HNgcp
A21JAoGBAJpIuDa9T9xGHIh2iq8aQWdX+xU3v3cDyhOWQPu5I+8W0ySab4ICzidd
vf6bFRMxy4MT/o9UWQwq1vEX8fzdApv4LtPKAhdh+hpRJvQvhmH+Uv1Gn9xZPSjg
LuWoYapLLrWv34yuiV0j1eevOIzOue8WclRHcUPLuq0LIZ9cV6Kl
-----END RSA PRIVATE KEY-----`
}

export default CONFIG
