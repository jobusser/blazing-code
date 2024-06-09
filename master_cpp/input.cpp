// ask for a person's name and greet them
# include <iostream>
#include <string>

int main()
{
  std::cout << "Please enter your nickname: ";

  // read name
  std::string name;
  std::cin  >> name;

  // write
  std::cout << "Wassup, "  << name << "!" << std::endl;

  
  return 0;
}
