export function hslToColorName(hsl: number){
    if(hsl < 10 && hsl >= 340 ) return 'red'
    else if(hsl >= 10 && hsl < 45) return 'orange'
    else if(hsl >= 45 && hsl < 65) return 'yellow'
    else if(hsl >= 65 && hsl < 90) return 'lime'
    else if(hsl >= 90 && hsl < 145) return 'green'
    else if(hsl >= 145 && hsl < 165) return 'teal'
    else if(hsl >= 165 && hsl < 190) return 'cyan'
    else if(hsl >= 190 && hsl < 210) return 'blue'
    else if(hsl >= 210 && hsl < 270) return 'indigo' 
    else if(hsl >= 270 && hsl < 290) return 'violet'
    else if(hsl >= 290 && hsl < 300) return 'grape'
    else if(hsl >= 300 && hsl < 340) return 'pink'
}
export default hslToColorName