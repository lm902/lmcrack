class lmcrack {
    static cracklm(hash) {
        return new Promise(resolve => {
            var results = [hash.slice(0,16), hash.slice(17, 32)].map(_ => {
                valid = [...Array(65).map(_ => String.fromCharCode(_ + 32)),"{","|","}","~"];
                password = "";
                while(hash != await lmhash.buildhalf(password)) {
                    password = super.proceed(password, valid);
                }
                return password;
            });
            return results[0] + results[1];
        });
    }
    static proceed(password, valid) {
        if(!password) return valid[0];
        lastchar = password[password.length - 1];
        if(valid.length - 1 > valid.indexOf(lastchar))
            password[password.length - 1] = valid[valid.indexOf(lastchar) + 1];
        else password += valid[0];
        return password;
    }
}

