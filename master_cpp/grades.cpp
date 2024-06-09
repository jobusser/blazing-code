#include <algorithm>
#include <iomanip>
#include <ios>
#include <iostream>
#include <string>
#include <vector>

using std::cin; using std::cout;
using std::endl;
using std::setprecision;
using std::sort;
using std::streamsize;
using std::string;
using std::vector;

int main()
{
	int midterm;
	cout << endl << "Enter midterm grade: ";
	cin >> midterm;

	int final;
	cout << endl << "Enter final grade: ";
	cin >> final;

	double x;
	vector<double> homework;

	cout << "Enter all your homework grades: " << endl;
	while (cin >> x)
		homework.push_back(x); // appends x to end of vector as a new value

	typedef vector<double>::size_type vec_sz; // let vec_sz be another name for type of vector<double>::size
	vec_sz size = homework.size();

	if (size == 0) {
		cout << "You must " "enter your grades; please try again." << endl;
		return 1;
	}

	sort(homework.begin(), homework.end());

	vec_sz mid = size/2;
	double median;

	median = size % 2 == 0 ? (homework[mid] + homework[mid-1]) / 2 : homework[mid];

	streamsize prec = cout.precision();
	cout << "Your final grade is " << setprecision(3) << 0.2*midterm + 0.4 * final + 0.4 * median << setprecision(prec) << endl;
	// we reset the precision of the character output at the end there
	


}
