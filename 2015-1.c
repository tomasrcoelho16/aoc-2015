#include <stddef.h>
#include <stdio.h>
#include <stdlib.h>

int main(){
    char file[] = "";
    int floor = 0;

    for(size_t i = 0; i < sizeof(file); i++){
        if(file[i] == '('){
            floor++;
        } else {
            floor--;
        }
    }

    printf("%d", floor);

    return 1;
}
