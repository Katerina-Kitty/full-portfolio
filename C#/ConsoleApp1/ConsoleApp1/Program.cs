using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    struct User
    {
        public string name;
        public int age;

        public void DisplayInfo()
        {
            Console.WriteLine($"Name: {name}, Age: {age}");
        }
    }


    class Person
    {
        public string name;
        public int age = 18;

        public void GetInfo()
        {
            Console.WriteLine($"Name: {name}, Age: {age}");
        }
    }



    class Program
    {

        static void SayHello()
        {
            Console.WriteLine("Hello");
        }

        static void SayGoodbye()
        {
            Console.WriteLine("GoodBye");
        }

        static int GetSum()
        {
            int x = 2;
            int y = 3;
            return x + y;
        }

        static string GetHello()
        {
            return "Hello";
        }

        static void Main(string[] args)
        {
            //for (int i = 0; i < length; i++)
            //{

            //}

            //Console.WriteLine();

            int[] nums2 = new int[4] { 1, 2, 3, 5 };

            int[] nums3 = new int[] { 1, 2, 3, 5 };

            int[] nums4 = new[] { 1, 2, 3, 5 };

            int[] nums5 = { 1, 2, 3, 5 };

            //все эти варианты написания массива верны. можно писать как удобно

            Console.WriteLine(nums2[3]);

            for (int i = 0; i < nums2.Length; i++)
            {
                nums2[i] = nums2[i] * 2; //удваивает каждый элемент индекса
                Console.WriteLine(nums2[i]);
            }

            Console.WriteLine();
            Console.WriteLine();
            Console.WriteLine();
            Console.WriteLine("-----------------------------");
            //многомерный массив

            int[] snum1 = new int[] { 0, 1, 2, 3, 4, 5 };
            int[,] snum2 = { { 0, 1, 2 }, { 3, 4, 5 } };

            foreach (int j in snum2)
            {
                Console.Write($"{j} "); //$-интерполяция
            }
            Console.WriteLine();
            //Четырехмерный массив и его лучший вывод
            int[,] snum3 = { { 0, 1, 2 }, { 3, 4, 5 }, { 6, 7, 8 }, { 9, 10, 11 } };

            int rows = snum3.GetUpperBound(0) + 1;
            int columns = snum3.Length / rows;

            for (int i = 0; i < rows; i++)
            {
                for (int j = 0; j < columns; j++)
                {
                    Console.Write($"{snum3[i,j]} \t");
                }
                Console.WriteLine();
            }


            //LESSON C# 2

            ////ввод чисел
            //int[] nums = new int [7];
            //Console.WriteLine("Введите 7 чисел, пожалуйста!");
            //for (int i = 0; i < nums.Length; i++)
            //{
            //    Console.Write("{0}-е число: ",i + 1);
            //    nums[i] = Int32.Parse(Console.ReadLine());
            //}

            ////coртировка
            //int temp;
            //for (int i = 0; i < nums.Length-1; i++)
            //{
            //    for (int j = i+1; j < nums.Length; j++)
            //    {
            //        if(nums[i] > nums[j])
            //        {
            //            temp = nums[i];
            //            nums[i] = nums[j];
            //            nums[j] = temp;
            //        }
            //    }
            //}

            ////вывод
            //Console.WriteLine("Вывод отсортированого массива");
            //for (int i = 0; i < nums.Length; i++)
            //{
            //    Console.Write(nums[i]);
            //}

            SayHello();
            SayGoodbye();

            string msg = GetHello();
            int sum = GetSum();
            Console.WriteLine(msg);
            Console.WriteLine(sum);



            //STRUCT
            User tom;
            tom.name = "Tom";
            tom.age = 35;
            tom.DisplayInfo();


            //CLASS
            Person p;
            
            Console.WriteLine();
        }
    }
}
