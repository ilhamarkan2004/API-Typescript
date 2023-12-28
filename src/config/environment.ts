import 'dotenv/config'

const CONFIG = {
  db: process.env.DB,
  jwt_public: `-----BEGIN PUBLIC KEY-----
MIGeMA0GCSqGSIb3DQEBAQUAA4GMADCBiAKBgFZ5+8XbrpJpZNmHxEYhRZ+x1KD1
7x3XfU+ujKK/cqqyhrhr1v5Ec8GIrcKDAltWc7Mp2PGcB5VDYiyZDiSSCgXUEexi
AObcOLRqJcPhztMVpMdOrmT7mU/jDVqOn2z5zdQs4mckDg/ndpqwHaKTlEaQ924g
wMyqU6Ju5N4hxsELAgMBAAE=
-----END PUBLIC KEY-----`,
  jwt_private: `-----BEGIN RSA PRIVATE KEY-----
MIICWgIBAAKBgFZ5+8XbrpJpZNmHxEYhRZ+x1KD17x3XfU+ujKK/cqqyhrhr1v5E
c8GIrcKDAltWc7Mp2PGcB5VDYiyZDiSSCgXUEexiAObcOLRqJcPhztMVpMdOrmT7
mU/jDVqOn2z5zdQs4mckDg/ndpqwHaKTlEaQ924gwMyqU6Ju5N4hxsELAgMBAAEC
gYAU+ZFv9FDrglTLznp06C0TBvcj84MEIfhrE1NZRkZx0MuMf9ut4LyS/Kvoug4g
SV/W3ReZwta0BZwSZS1hAWscplmfAhGdzl0HAxr9hJ+YeMbopp+glt+lW+uuMZMS
Skia5iszeDvcdfJTG8YZDXMfWHGeV4UDsMeJ/wcvYMXDgQJBAKIke45atGmjItQn
gHj+MpKCsou367Ao4CMeoRHLV8I9lmov/U+FxMJm8QakDmZlok+4JYZQ5oWxq4Nm
s5UqdikCQQCIiLt+OEz9CfOADwCMjKXJ3/bpORhu3Z9ctgCFcK/dVKKH+kc/F3wz
5aUN8t2vf5pn4gZczHs+WSBtunzgh5wTAkA399vmcYzhAfzdupzwJt6SECdNbzkd
354uwT3cBJLQa63mDZakwon+iMYeArctxVtXpTreuEI6V+/aNbM7hCKxAkA+VS5E
EbAUVda1QCQgBpYp8/XlxAtDkiqPSQgz455mjZ0mNz0PsMkjaFRSae6LkNYNV0NQ
WoppjIchkWIxn7fBAkBl5eEyaTNiAEhHerXaI8kQG9iDvmc/4AGgTjZZOk2Iae58
gKhWZMbBve4EykgEK7jwS9794tnXCFPe7EOqBH1d
-----END RSA PRIVATE KEY-----`
}

export default CONFIG
