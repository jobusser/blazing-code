public class scope1 {
    int currentScope = 0; // only accessed through scope1.currentScope
    public static void main(String[] args) {
        int currentScope = 1; // java uses inner one
        // Does not work if you remove inner one
        // Java does not attempt to make a global space, all is class
        // based.
        // So JS goes to look, Java does not
        System.out.println(currentScope);
    }
}
