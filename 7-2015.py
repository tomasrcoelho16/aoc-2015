def a_wire_signal():
    file = open('7-2015-input', 'r')
    values = {}
    while True:
        content = file.readline()
        if not content: break
        partitions = content.split(' ')
        if partitions[1] == '->':
            values[partitions[2]] = partitions[0]
            continue
        if partitions[2] == '->':
            values[partitions[3]] = ~int(values[partitions[1]])
            continue
        left_operand = partitions[0]
        right_operand = partitions[2]
        operation = partitions[1]
        match operation:
            case 'AND':
                values[partitions[4]] = int(left_operand) & int(right_operand)
                break
            case 'OR':
                values[partitions[4]] = int(left_operand) | int(right_operand)
                break
            case 'LSHIFT':
                values[partitions[4]] = int(left_operand) << int(right_operand)
                break
            case 'RSHIFT':
                values[partitions[4]] = int(left_operand) >> int(right_operand)
                break
    return values['a']
