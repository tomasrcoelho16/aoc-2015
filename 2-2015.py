def wrapping_paper():
    file = open('2015-2-text.txt', 'r')
    total_wrap = 0
    while True:
        content = file.readline()
        if not content:
            break
        numbers = content.split('x')
        length = int(numbers[0])
        width = int(numbers[1])
        height = int(numbers[2])
        # 2*l*w + 2*w*h + 2*h*l
        total_wrap += 2*length*width + 2*width*height + 2*length*height + sorted([length, width, height])[0] * sorted([length, width, height])[1]
    print(total_wrap)

def feet_of_ribbon():
    total = 0
    file = open('2015-2-text.txt', 'r')
    while True:
        content = file.readline()
        if not content:
            break
        numbers = content.split('x')
        length = int(numbers[0])
        width = int(numbers[1])
        height = int(numbers[2])
        # 2*l*w + 2*w*h + 2*h*l
        total += length*width*height + sorted([length, width, height])[0]*2 + sorted([length, width, height])[1]*2
    print(total)

feet_of_ribbon()
