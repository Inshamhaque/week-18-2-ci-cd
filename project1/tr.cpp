#include <bits/stdc++.h>
using namespace std;

int main() {
	    int U = 11;int V = 748;
        int A = 5819;int S = 589;
	    // cin>>U>>V>>A>>S;

	    if(U<=V){
	        cout<<"yes"<<endl;
	    }
	    else{
	        long long v = 0;
	        long long rhs = pow(U,2) - 2*A*S;
	        v = pow(rhs,0.5);
	        
	        if(v<=V){
	            cout<<v<<endl;
	        }
	        else{
	            cout<<v<<endl;
	        }
	    }
	}
