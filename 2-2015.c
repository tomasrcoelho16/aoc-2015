#include <stddef.h>
#include <stdio.h>
#include <stdlib.h>

int main(){
    char *filename = "2015-2-text.txt";
    FILE *fp = fopen(filename, "r");

    const unsigned MAX_LENGTH = 256;
    char buffer[MAX_LENGTH];

    while (fgets(buffer, MAX_LENGTH, fp)){
        printf("%s", buffer);
        for(size_t i = 0; i < sizeof(buffer); i++){
            // usar regex para dividir strings por 'x' LxWxH
        }
    }
    // close the file
    fclose(fp);

    return 1;
}
