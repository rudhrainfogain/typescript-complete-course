namespace MyMath {
    //function registered to MyMath namespace but can be accessed outside as it is exported

    export function calculateRectangle(width: number, length: number) {
        return width * length;
    }
}