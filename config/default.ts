export default {
  port: 1337,
  dbUri: 'mongodb://localhost:27017/rest-api-tutorial',
  saltWorkFactor: 10,
  accessTokenTtl: '15m',
  refreshTokenTtl: '1y',
  publicKey: `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCv8hx3kMNAxYytJMZp20614aUf
kC9xcV9uju0LKS1Ce2ImASeL9bQ3vhDhe8zuCVJYfvigkx4s4BZqd9WUD4Yeij7L
iHrDojiHDk+WvvhUBAZNwvru0pZvH3c8lm+wr6bY5OnQ9N+vf2dRpwmh+UI5BB9r
bKh91uYzaW18P+hXTwIDAQAB
-----END PUBLIC KEY-----`,
  privateKey: `-----BEGIN RSA PRIVATE KEY-----
MIICXgIBAAKBgQCv8hx3kMNAxYytJMZp20614aUfkC9xcV9uju0LKS1Ce2ImASeL
9bQ3vhDhe8zuCVJYfvigkx4s4BZqd9WUD4Yeij7LiHrDojiHDk+WvvhUBAZNwvru
0pZvH3c8lm+wr6bY5OnQ9N+vf2dRpwmh+UI5BB9rbKh91uYzaW18P+hXTwIDAQAB
AoGBAIXoCA5fmJq1PwmPkYqDJHZ8k0VgYRs/o9fq4zG5Vv7gFKTEACsfBtfdyc8y
f5cydP9xMxxSm4afza+eIGidH/7ek6uZ07WAyMVLDyuTpcc7KvbShuzfi4BSJYNo
Ts1GhevXd4Wu9wTcJen53TBSA7Wk3QS3oL+yhaBxMXannF4BAkEA4l61DBAxHA6Y
Dbim3GYPPdhD401+ak5s9rhfypTBAcSxYXbk6+qOUJ/BgzzY1N6A1NV8QHp7l4hC
oGIFTQw0zwJBAMb5xSNZm5CnPRbiBclVOmlvI7lG+foiqjXF0xDi9zT8XpFsQ6zq
4tELoUNZRa6JT9PLBPZCmprnYnTMzr13VYECQHo9ZkrzW3GpN9cBBaoyurxM0qwm
JsPFQfYhLik5FtibnKXjDE+RQ/SpsFfsPbMFzFAiUIyJF8CGZmQxSmeG1eUCQQC8
XhrGY3+Fiv2nWyR1PK1GwUOFlG704bpXm8c8NlInpD921pKe8eL2Wlc5phr0p+Od
spYo+FbbDPBFeNrDvWSBAkEA1jhXfAtw9bgfoAldTbqtKFCrV5kmA4SYveCie5Bu
L61Nmx0uFIpF5xHppWv2OG8LLqsrZB5hFFnrRFnm6QlmbA==
-----END RSA PRIVATE KEY-----`,
};
