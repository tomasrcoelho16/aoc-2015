import hashlib

def secret_key_number(string):
    base = 10
    while True:
        to_hash = (string + str(base)).encode()
        beginning = hashlib.md5(to_hash).hexdigest()[0:6:]
        if(beginning == "000000"):
            break
        base += 1
    print(base)

secret_key_number("iwrupvqb")
