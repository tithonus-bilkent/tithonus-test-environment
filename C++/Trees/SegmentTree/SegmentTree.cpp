// Solution to problem at https://www.eolymp.com/en/problems/2909
// Author: Ziya Mukhtarov, 2016

#include <iostream>

#include <cstring>

#define MAXN 100010
#define INF 0

using namespace std;

int x, y, z, n, q, i, s;

struct node {
    int o, t, add;
}
st[4 * MAXN];

/*
void build(int v, int L, int R)
{
    if (L==R)
    {
        st[v]=a[L];
        add[v]=INF;
        return;
    }
    int mid=(L+R)/2;
    build (2*v, L, mid);
    build (2*v+1, mid+1, R);
    st[v]=st[2*v]+st[2*v+1];
    add[v]=INF;
}
*/

void update(int v, int L, int R, int l, int r) {
    if (L > l) l = L;
    if (R < r) r = R;

    if (l > r) return;

    if (l == L && r == R) {
        st[v].add = (st[v].add + 1) % 3;
        int k = st[v].o;
        st[v].o = (R - L + 1) - st[v].o - st[v].t;
        st[v].t = k;
        return;
    }

    int mid = (L + R) / 2;

    if (st[v].add != INF) {
        st[2 * v].add = (st[v].add + st[2 * v].add) % 3;
        st[2 * v + 1].add = (st[v].add + st[2 * v + 1].add) % 3;

        while (st[v].add > 0) {
            st[v].add--;

            int k = st[2 * v].o;
            st[2 * v].o = (mid - L + 1) - k - st[2 * v].t;
            st[2 * v].t = k;

            k = st[2 * v + 1].o;
            st[2 * v + 1].o = (R - mid) - k - st[2 * v + 1].t;
            st[2 * v + 1].t = k;
        }

        st[v].add = INF;
    }

    update(2 * v, L, mid, l, r);
    update(2 * v + 1, mid + 1, R, l, r);

    st[v].o = st[2 * v].o + st[2 * v + 1].o;
    st[v].t = st[2 * v].t + st[2 * v + 1].t;
}

long long find(int v, int L, int R, int l, int r) {
    if (L > l) l = L;
    if (R < r) r = R;

    if (l > r) return 0;

    if (L == l && R == r) return (R - L + 1) - st[v].o - st[v].t;
    int mid = (L + R) / 2;
    if (st[v].add != INF) {
        st[2 * v].add = (st[v].add + st[2 * v].add) % 3;
        st[2 * v + 1].add = (st[v].add + st[2 * v + 1].add) % 3;

        while (st[v].add > 0) {
            st[v].add--;

            int k = st[2 * v].o;
            st[2 * v].o = (mid - L + 1) - k - st[2 * v].t;
            st[2 * v].t = k;

            k = st[2 * v + 1].o;
            st[2 * v + 1].o = (R - mid) - k - st[2 * v + 1].t;
            st[2 * v + 1].t = k;
        }

        st[v].add = INF;
    }
    return find(2 * v, L, mid, l, r) + find(2 * v + 1, mid + 1, R, l, r);
}

int main() {
    memset(st, 0, sizeof(st));
    cin >> n >> q;
    //for (i=0;i<n;i++) cin>>a[i];
    //build(1,0,n-1);
    for (i = 0; i < q; i++) {
        cin >> s >> x >> y;
        if (s == 1) {
            cout << find(1, 0, n - 1, x, y) << endl;
        } else {
            update(1, 0, n - 1, x, y);
        }
    }
    return 0;
}
