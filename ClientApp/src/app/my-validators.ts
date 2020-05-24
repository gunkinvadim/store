import { FormControl } from "@angular/forms";

export class MyValidators {
    static number(control: FormControl): { [key: string]: boolean } {
        for (let i = 0; i < control.value.length; i++) {
            if (isNaN(parseInt(control.value.charAt(i)))) {
                return {
                    'number': true
                }
            }
        }
        
        return null
    }

    static phoneNumber(control: FormControl): { [key: string]: boolean } {
        for (let i = 0; i < control.value.length; i++) {
            if (isNaN(parseInt(control.value.charAt(i)))
                && control.value.charAt(i) !== '+'
                && control.value.charAt(i) !== '-'
                && control.value.charAt(i) !== '('
                && control.value.charAt(i) !== ')'
                && control.value.charAt(i) !== ' ') {
                return {
                    'phoneNumber': true
                }
            }
        }
        
        return null
    }

    static checked(control: FormControl): { [key: string]: boolean } {
        if (control.value !== true) {
            return {
                'checked': true
            }
        }

        return null
    }
}