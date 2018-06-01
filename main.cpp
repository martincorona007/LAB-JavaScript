#include <iomanip>
#include <iostream>
#include <fstream>
#include <string>
#include <cmath>
FILE *Archivo;


using namespace std;
double funcionX(double a) {
	return pow(a, 4) - 8 * (pow(a, 3)) - 35 * (pow(a, 2)) + 450 * (a)-1001;

}
double ErrorA(double a, double b) {
	if (a>b) {
		return (a - b) / a;
	}
	else
		return (b - a) / b;
}
int main() {

    Archivo = fopen("Archivo1.xls", "at+");
//	cin >> s;
	int n = 1;
	//*********//
	double fx, fxi, fxu, fxr;

	////***//

	////***//



	int ite = 0;//contador de iteraciones
		double xi = 4.5, xu = 6, xr = 0, er = 0;
		bool vxi = true, vxu = true, vxr = true;
		/*xi=4.5;
		xu=6;
		fxi=funcionX(xi);
		fxu=funcionX(xu);
		cout<<fxi<<endl;
		cout<<fxu<<endl;
		xr=(xi+xu)/2;
		cout<<xr<<endl;
		*/
		fprintf(Archivo,"No. de iteracion \txi\txu\txr\tf(x)\tError Absoluto");
		cout << "No. Iteracion\t xi\t xu\t xr\t\t f(x)\t\t Error Absoluto" << endl;

		for (int i = 0; i <= 5; i++) {
			cout << endl;
			xr = 0;
			xr = (xi + xu) / 2;
			fxr = funcionX(xr);
			fxi = funcionX(xi);
			fxu = funcionX(xu);
			//cout<<fxr<<endl;
			if (fxi > 0)
			{
				vxi = true;
			}
			else {

				vxi = false;
			}////////////7
			if (fxu > 0) {

				vxu = true;
			}
			else {

				vxu = false;
			}
			///////////
			if (fxr > 0) {

				vxr = true;
			}
			else {
				vxr = false;
			}


			if (i != 0)
				er = ErrorA(xi, xu);



			if (i != 1) {

				cout << "  " << i << "\t\t" << xi << "\t" << xu << "\t" << xr << "\t" << "\t" << fxr << "\t" << er << endl;
				 fprintf(Archivo,"\n%i\t%f\t%f\t%f\t%f\t%f",i,xi,xu,xr,fxr,er );





			}
			else{

				cout << "  " << i << "\t\t" << xi << "\t" << xu << "\t" << xr << "\t" << "\t" << fxr << "\t\t" << er << endl;
			    fprintf(Archivo,"\n%i\t%f\t%f\t%f\t%f\t%f",i,xi,xu,xr,fxr,er );


		}
			if (vxi != vxr) {
				xu = xr;
			}
			else {
				xi = xr;
			}

		}

	//*********//



//	system("pause");
	return 0;
}
