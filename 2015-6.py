def lit_lights():
    file = open('2015-6-input.txt', 'r')
    on_lights = []
    while True:
        content = file.readline()
        if not content: break
        parcels = content.split(' ')
        action = 'on'
        if parcels[0] == 'turn': action = parcels[1]; parcels.pop(1); parcels.pop(0);
        else: action = parcels[0]; parcels.pop(0)
        init_coords = parcels[0].split(',')
        finish_coords = parcels[2].split(',')
        for i in range(int(init_coords[0]), int(finish_coords[0])+1):
            for j in range(int(init_coords[1]), int(finish_coords[1])+1):
                if (i,j) in on_lights:
                    if action == 'on':
                        continue
                    else:
                        on_lights.remove((i,j))
                        continue
                if action == 'off':
                    continue
                else:
                    on_lights.append((i,j))
                    continue
    print(len(on_lights))


lit_lights()            

