def nice_strings():
    file = open('2015-5-text.txt', 'r')
    strings_count = 0
    while True:
        content = file.readline()
        if not content:
            break
        vowels = ['a', 'e', 'i', 'o', 'u']
        bad_strings = ['ab', 'cd' , 'pq', 'xy']
        double = False
        vowels_count = 0
        naughty = False
        for i in range(0, len(content)):
            if content[i] in vowels:
                vowels_count += 1
            if (i + 1) != len(content):
                if content[i] == content[i+1]: double = True
                if (content[i] + content[i+1]) in bad_strings: naughty = True; break
        if (not naughty) and double and (vowels_count >= 3): strings_count += 1
    print(strings_count)

def nice_strings_corrected():
    file = open('2015-5-text.txt', 'r')
    strings_count = 0
    while True:
        content = file.readline()
        if not content:
            break
        pairs = []
        pair_repeats = False
        sandwich = False
        for i in range(0,len(content)-1):
            if (i+2 < len(content)) and content[i] == content[i+2]: sandwich = True
            if (content[i], content[i+1]) != (content[i-1], content[i]) and (content[i], content[i+1]) in pairs: pair_repeats = True
            elif pairs.count((content[i], content[i+1])) == 2: pair_repeats = True
            else: pairs.append((content[i], content[i+1]))
        if pair_repeats and sandwich: strings_count += 1
    print(strings_count)

nice_strings_corrected()
