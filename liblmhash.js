class lmhash {
    static generate(plaintext) {
        return Promise.all([super.buildhalf(plaintext.slice(0, 7)),
                            super.buildhalf(plaintext.slice(7, 14))])
                                      .then(values => values[0] + values[1]);
    }
    static buildhalf(plaintext) {
        return crypto.subtle.encrypt("DES-ECB",
                                     super.nulpad(plaintext),
                                     "KGS!@#$%");
    }
    static nulpad(data, length) {
        return [...Array(length - data.length)].map(_ => data += "\x00").pop();
    }
}

