import numpy as np

def lit_lights():
    file = open('2015-6-input.txt', 'r')
    matrix = np.zeros((1000,1000), dtype=int)
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
                if action == 'on': matrix[i,j] = 1; continue;
                if action == 'off': matrix[i,j] = 0; continue;
                if action == 'toggle' and matrix[i,j] == 0: matrix[i,j] = 1
                else: matrix[i,j] = 0
    print(matrix.sum())

def total_brightness():
    file = open('2015-6-input.txt', 'r')
    matrix = np.zeros((1000,1000), dtype=int)
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
                if action == 'on': matrix[i,j] += 1; continue;
                if action == 'off' and matrix[i,j] > 0: matrix[i,j] -= 1; continue;
                if action == 'toggle': matrix[i,j] += 2
    print(matrix.sum())

total_brightness()
