import java.util.Scanner;

public class AulaIntro {
    public static void main(String[] args) {
// TIPOS PRIMITIVOS
// int nota;
// float salario;
// char sexo;
// boolean valid;
// double preco;

// TIPOS OBJETOS
// String nome;
// Integer valor;
// Double numero;
// Float test;

        Scanner sc = new Scanner(System.in);

        System.out.print("Digite a sua nota: \n");
        int nota = sc.nextInt();

        System.out.println("A nota digitada foi: " + nota);  
        
        sc.close();
        
    }

}
