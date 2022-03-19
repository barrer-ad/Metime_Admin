import React, { useRef } from "react";
import { Link } from "react-router-dom";
import UsersCard from "./UsersCard";

export default function ListUsers(props) {
  const inputEl = useRef("");

  const deleteUsersHandler = (id) => {
    props.getUsersId(id);
  };

  const renderUsersList = props.users.map((users, id) => {
    return (
      <UsersCard users={users} key={id} clickHandler={deleteUsersHandler} />
    );
  });
  const getSearchTerm = () => {
    props.searchKeyWord(inputEl.current.value);
  };

  return (
    <div className="container mt-5 ">
      <div className="table-responsive">
        <div className="d-flex justify-content-end m-2">
          <input
            ref={inputEl}
            className="form-control me-2"
            type="text"
            placeholder="Search"
            value={props.term}
            onChange={getSearchTerm}
          />
          <Link to="/add">
            <img
              style={{ height: "60px", width: "60px" }}
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAAThUlEQVR4nO2de3hU5ZnAf9+Z3BPI/Z5MJhdyG0ICARRFAiHFiiIKomgVqW3VttuntruLdbvtPrqu123t8+xjq9WtICAi4r0gQrgEKlVuCZArIZlMEkIyISSQTCaXmW//GHKSFK1hLiF05/dP8n1nzvu+Z9453+U97/cd8ODBgwcPHjx48ODBgwcPHjx48ODBgwcP1z7iahswNlZotKlVecIm84SQ6TZJhgIpEgKBUOx/AXqA8wJ6pBCnBbJGIqqlEGXG05mlsMV69a5hbExYhyQk5MYrXtblipALJRQAwU6K7JSwD2SxHLRubWysPuMKO13NhHKITqfzk0rAcinFKgELAc3QsfCIOLS6DCKjE4mISiAiIh5fX3/8A4Lw8fUDoL/PQq+5m76+XtpNTbSbmmk720ijoYpz51pGqrICOxFyg7fS/25tbW3fuF7o32FCOCRSrw8KMMtHQPwzEAug8fImSz+bLP11pKbnEhwS6ZSOzvMm6k6VUXHyr1RVHMI6ODB06AyC31h6NK+2th7vce5KnOfqOmT+fC+d0fQTKfklEA4Ql5DK7DnfZtr0AvwDgtyi1my+yIljJXzx+XZamuuGqtulFE8bdREvs3fvoFsUj4Gr5pDElKkzFSn/AMwESErOpqBoBZnZsxHicrMsFjP1p09w9kw9ptZGTG3N9PR0Yentob/PAlLi4+ePj7cfk0MjCAuLITIqnoSkdBKTMgkImPSVdtTWHGPn9vUY66uGqo5LhR8ZT5f/xU2X/ncZd4fo9XqfHrN8USJ+Aojw8FiW3PUoGVmzLvvsufYzlB7eQ1XFIUxtTWh1WcQnpBEZFU9kdAKBgSFqHyKEQp/FTH9/H13nTXR0tGBqbcRoqKbJWE14ZBzZOTeQkzuXyOiEy3RVln/Bx++9wvlzrQASye+CAvlFeXl5v9u/lBGMq0O02pwUobFtBmZqNF7ML7qbgqK78fb2UT9js9k4UVrCwf2f0HGuhdzp89Hn3oBWl4miaL5e+N/BZrNhrC/n5ImDtLc1sfrhp77ycwMD/ezd+Tb7it/Fah1EwpeKtN5jMFQZHFLsAOPmkKQk/QIU3gNCQsOjuffBJ0jUpqvHbTYbRw8Vs3fnZiYFhzOvcBnpWTPROOiEsbD21f9gat5cZsxaiKIoan2TsZq31j7H+Y5WQHQqWJfW11eWuM2QEYyLQ5JSpi5DyrcAX/20Odx178/x8w9UjzcZq/lgy8v4+vpTtPgBklOmjodZNBmr2fbRnxjo7+fHP39p1LFeczdbNr1E5YmDgOgT0rrSYKj8wN02ud0hupTs70opXgM0N8y7ndvufBgh7L/GwcEBPv34T5woPcAtS79H3oz57jbnK+nqNBEcEsmxw3vQT7sBHx9fAKS08fHWVzh44BMAq5B832AoX+tOW9zXHgCJyfrbBWID4FVQtIJbl/5AHUF1tJ9l7au/RhEKDz36NAkjmq/xxs/Pfrd+vu8DSoq3MPuGWwAQQpCRPQtvLx9qa0oVBEuCQ6MqujpNFe6yxW13iE43db4Ucjvgt+jWVSz41kr1mKGunLfWPkPhonu5fu5t7jLBITrazxIWEYPVZh3Vf+3esYmd29cD9Ethu9VYV7nLHfrdcodotTkpKHI3EHTDvNu5+bbV6rHK8i94Z8OLrFz1ONOmz3OHeqcYmoy+9OwjhIRGERllHyInp+Vg7u6iyVijEYgloSHhmzs72ztdrd/lDtHr9T4DVrkdSLF34D9Tm6nK8i94f/P/sPqRJ0lKzna1apeSpMtm8/rniYhKUJ2SnpVPS3MdprYmf4QyJy1Vu66lpcXmSr0ud0hgUORvQdwZGh7Ndx/5T7y97R2koa6cdza8yOpHniQ+Ic3Val3O5OAwUqbksmndcyQkTiE0PBohBOmZ+Rw/VoKltyfB3DsY2NVp+syVel3qEG2q/kakeEVRNGL1D54kPDIOsLfLb7z6K1auenzC3xkjmTw5jITEKby9/gVycufi5x+It7cP2uRsjn65Cylt14UEx+zs6mprcpVO1zlk/nyvkE7zh0BM4aJ7mT6rELAPbde++mtuLFg6IfuMbyI0PBpF0fDZtnVMn7UQjUZDcHA4g4MDGOpOCiHk7M48/WsYDC5pulzmEJ0S+FPgwfDwWO5Z9TgajV30tg9fRxEKtyz9nqtUqVitgxRvX8fWTb/l85IPMPd0okvJGTXrdgVaXSanT5VxpqmWKRkz7HXJWZQe3UNvb090cFdPe1en6UtX6HKJ5ZF6fdClEDpL7npUjU01Gas5WXaAZSt/6go1l7F7x3oGLE38+ePX+eSj1+jvbaR4xwa36Lr9rh9y7PBumptqAfD29mHJskcBEIhfxcXlB7hCj0scEmAWjwLhibpMNWprs9n4YMvLfPv2740Kk7iS0sO7ef7ZNcTGRBIbE8kLz6yh7PBut+gKDAxm8dLvs3XT75DS3jpl6a8b6hMjfXwsD7tCj9MOSUtL8wX5M4CFi+5T648eKsbX19+t4ZCOjnPExgw/SYyNjaKjo91t+vLyF+Dj40fZseE44/yiuwGQgjU6nc7PWR1OO2TA5nMXEBeXkEp6Vj5gvzv27nqHosUPOCt+wlF0y3fYtX0jVps9gSUjexax8SkAsSiBdzor32mHSClWAcyec4s6ATxRWsKkyWHjFrUdT9LSpzN5UijlpQcAe7xr1pxvAyBt4n5n5TvlkMTEjDgBCzUaL3Ly5qr1B/d/wrzCZc7aNmGZM28JXx78VC3nzihA4+UNQi7S6fQxzsh2yiFC470C0GRNvY6AwMmA/bHrufYzZGTNdEb0hCY7Zw5nWwxqalFAwCQys2cCeEnBcmdkO+UQRciFYB9tDFF6eA95MxY4/Lj1WkCj8SJvRgFlR/apdZnZl74DSaEzsp1wyAqNhJsAUtKmqbVVFYfQ597gjE3XBJlTr6Om8rBaTkvPs/8jKIQVDv8aHXZIYkrldCAkPCKOkLAowJ6qY2prIjEpw1Gx1wy6ZD0tZ+rps5gBCAmLIiwiBiAkKelkrqNyHXaIAtMAtLrhL7/+9Am0uiw0Gi9HxV4zeHn7oE3KxFBfrtZptZkACKFM+7rzvgnHmywpMwEioxPVqpbmeuITJ35o3VXEJSRztnk4QyjiUr6XDRxuIhx2iLikNCJqOOmsva1RfZjz/4HIKC1tpqYRZfu1C+UqOESCDiAiIk6tM7U1ExkZ76jIa47ImERMrY1qOXzou5AkOyrTmcY+GMDffzghuru7k0mTw65YkNU6yO5P13Ps8G7Onz83dgOCL18yEhwczBOPLR6zjLCwCPJmLqDw5geuuO8LmhSC+WKXWh6RP+zwWhZnHDIJwMfPX63ot/SOKo+VkWH0kcFCRyg98ucr+nzLWRNrnnie4h0bWLR49TefMAI/3wAsfWa17OOnxha/OrN7DDgzMQwC8PUddkBfX++o8lgZGUYfb5wJ2/v6BajDXgBfX/WRyFVxiAuZAOuGhLzaFgDOOaQb7HfFEL6+/qPKYyVvZiFrnnielpY2J8xxjJaWNv71F8+Tl190xef29ZlH3hX0DTdfFx21x5k+5CIQ1m/pVTszHz9/RpbHSuHN91O8YwO3Ln2Y81fwgCk4JJjSw6P7jNz8xVzoujBmGWHh4eTlF1F483fGfM4Qfb29I/sN+i2WoX/HbsDf4IxDugB6e7sJwR46CQoK4eKFDjWUMlY0Gi8WLV59xZ3qV42mLnRd4NnfbbsiOY5ysfs8QUGhatlsVm8Mhx3izDykHqC9fXh1cWRUPCZTs6MirznsE+Hhede5oe9CUvc1p3wjjseyBNV2o4ZnqhFRiZhclzM24TG1NY+KTAxdu0RUOyrTiTvErnTkTDU2PpnmxlOOirzmaDbWEhM3PClvb7U7REHWOCrTcYcIUQaMXL1KcmoODfWVDA6vAf+HZXBwAGNDFcmpw3kDDQ2VAEgpyxyV67BD7HuHcP7cuRY6O+zDVT+/AKKitTQaHb5jrxmM9ZVExybh62cf9nZ2tA2t4O1oaKgYf4fAFquEEoC62uNqbUb2TMrLrsoS73Hl5PG/kJk9Wy3X1pQO/bsHcDjP18mZuiwGqDj5V7Umf1YRZUf3YbNN+I13HMZms3L8WMmoJMDKCntqrxCi2BnZTjlEDlq3Ataq8i8x99iH3qHh0URExlNVccgZ0ROaqpNfEBWVOPTIFrP5ItX26x3EJt93RrZTDmlsrD4jYZfVOsiJ0v1q/fVzb2X/7q3OiJ7QlOzeyvU3Da+NLDu6b2gzmx0GQ/lZZ2Q7HVwUgjcBvvh8O1LaA3Q5efPovtiF4fQJZ8VPOGprSunu7mJqrj0xUErJoYPbARASp1PvnXaIt9K3FTjT0lxHTZU9LUZRFOZ/6y52bNugOukfASklu7atp3DRSnUNSlXFl7Q01wO0QI/TGws47RD75l/ytwDFOzap9TNmFWEdHKD0yF5nVXwtYWERtJw1qeWWljbCwsPdpu/ooZ1YrYPkzRzOhdu38x0ApBTPGwwGy9edO1Zc8jzEYvZ6BWhvNFRRVT402lBYsvxRtn/0v/Sau12h5jJGhu2dCaOPBXPPBXZ8so477vmJendUnjhIg6ESoG2w3/c1V+hxiUNaW4/3SCmeBvjovT8wMGDf0ShRm860GfPY+vZLbmm6Cm++H29/LbcufZjb7vgBvoE6h8Lo34SUknffeom8/AXqCuL+/j4+fv+PQx956syZI+avFXAFuCwBt6uz4HBIqOl2S29PjFAEqVPsyXtp6Xl8vv8j+vv70bo4o1FRFFKn5HFjwZ3cWLCM1Cl5Ll9fCLB/z/s0GqtZuWqNKn/XpxupKv8ChDjaUJ/9CFS45BfnQuu3WBV4BLDt3fmOGuNSFA33fGcNe3e+zanqY65TN05UVxzmwN6t3Lf6CTUrpclYPTSstwmb9ceu3H7WpSnqnZ2m5pCQqBCJnHP6VCkzZhXh7e2Df0AQyal6Nr7xDLrkqQSHRrhSrdtoNNbw1tpnuP+hf1ejumbzRV5/+d/otT+M+u8GQ8UbrtTp8jUDCfFRe/oGuNnS2xPf1tbEtOk3IYQgOCSCqGgtmze8gC41h+Bg942GXEGTsZr1rz/F8pWPqZntNpuNTeueo8lYA3AwIszvgQm/tYbJZLKGhoTvQigPtrc1+Zt7LpCRbV+ZGxEVT2RUIpvWPUtMrE7d6WGiUVtzjI1vPMPylY+RqR8OIH747u8psw/jz2kE36qoKDvvat1uWVXT2dneGRIcU4KQ9zUZa7wVoZCclgPYnZKUomfz+hdQFC8SkzK+chfSq4GUkgN732fbh6/zwEO/JjV9eFVB8acb2b9nKyAtNritob7CLWEIty1z6upqawoOjTouYEVd7XFlcLCftPTpAISERDJ12lx2bl9PddUR0jNmjNoI82pg7rnA2+uep7Ghhod++DQxcTr12L5dW/hs25sAVoRyr7G+fIe77HDrurOuTlNNaEhUI4IlDXUVirm7i/SsfIQQ+AcEkT+7iGbjKT5492UCg4KJiUse97tFSsnRQzvZ+MZ/kTJlGitXrVHXS9psNj589/fsK34HYFBIvt9QX/62O+0Zl6vX6bLukELZBPhlT72eu+77+ahdqxuNNXy05WW8vX0pWvwAKZeaN3dz+lQZO//8JlablTvu/qdR20aZzRfZsvE3lyIP0mJD3NNYX/6Ru20at59jcnLWPBvKB0BoaFg09z74OIlJmepxm81G6aFi9uzaQmDQZAoKl5Ohn+3yxaNW6yDV5V9SsnsrPeYLLCi6h+mzCtWNOQEaDVW89eZzQ4+mz0nBHca68gMuNeRrGNf2ITk5K8mGshm4TlE0FCxcwYJFKy/bSPlk6X4OHvgEU1sTuTMK0E+7Ea0uEy8vb4f0Dg70YzRUcfL4Xzh+rISoqESun3srOdNvGuWI/v4+9ux8m5Lid4eeeB7UCFbW1ZUbnbvysTPuw5v8/Hzv9g7Lc8BjgBIaHs2SZY+OWlo9REf7WUqP7KGq8hCtLQ1okzKJT5xCZHQckZFagiaF4BcQqGbc91nMWHrNXOw+j6m1iXZTE83GWowNVUTHJpGZPZvp+QsIDY++TFfliYN8/P4fL22ejA34TUSY3y+PHDkyrik0V228qU3Nycdm+72A2WB/K8L8oruZmjv3Kzv2PouZutMnaD1jwNTWSFtrM2ZzFxZzj5rg7evrj19AIIGBIfb94aMSiIlLJjl1qpod8rfU1hzjs23raTSo6Uyl2JQfNTScOOiWC/8GrvIEYIVGm1z+I4H4FRAJEBufYn9dxYyCK07aHivmnguUHSvh0MHtQw+XANqApxrqs1+5mq9GmhAzsri4/AAfH8vDUuFfkMSDPQE7Qz+b7KmzSUnLJTTs8mbmSjjf0crpU8epOPlXaioOYbVeekWIoFnaxIuD/b6vuSqE7gwTwiFDpKWl+Q7afJdJeADJIkbMk8IiYtBqMy+98iie8Ig4/P2DRvchfb1YzD30Wro5ZzpDe1szba2NGBsqh5LYhhhEis8Ecr2XV9/7nlcejQGdTh8jBcsRLERSAFz5atLRdCDZKxSxS0jeq68/2frNp4w/E9Yhf4OSlJSdKzTk2WwiXShkXFp6PBkI4dJ6R+yrujqBLiT1EmoUqAZKDYby4ziRUejBgwcPHjx48ODBgwcPHjx48ODBgwcPHjyMnf8DX7AgE1FBT1AAAAAASUVORK5CYII="
            />
          </Link>
        </div>

        <table
          className="table text-white table-hover"
          style={{ backgroundColor: "#a6b1e1", borderRadius: "8px" }}
        >
          <thead>
            <tr>
              <th colSpan="2">#</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Creted AT</th>
              <th>Update AT</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{renderUsersList}</tbody>
        </table>
      </div>
    </div>
  );
}
