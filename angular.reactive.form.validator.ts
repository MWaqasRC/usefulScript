export class UsernameValidators {
    static connotContainSpace( control: AbstractControl) : ValidationErrors | null {
    if((control.value as string).indexOf(' ') >=0)
     return { cannotContainSpace: true }

    return null; 
}
