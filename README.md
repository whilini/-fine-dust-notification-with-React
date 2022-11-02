# 미세먼지 알리미

### Description
공공 API를 사용해 전국의 일일 미세먼지 현황을 시,도별로 조회 및 즐겨찾기에 추가

### Project Structure

```
.
├── public          # Asset 파일들
└── src             # 리액트 컴포넌트, 리덕스, scss, ..., etc
    ├── components  # 컴포넌트
    ├── constants   # 샘플 데이터
    ├── redux       # 리덕스
    └── scss        # scss 파일
```

### Tech Stacks
- React.js

- Redux-Thunk

- scss

### 사용된 API
[한국환경공단_에어코리아_대기오염정보](https://www.data.go.kr/tcs/dss/selectApiDataDetailView.do?publicDataPk=15073861)


### 환경 변수
```plaintext
REACT_APP_API_KEY={YOUR-APP-API-KEY}
```

### Running the app

데모를 실행해보실 때는 `npm run dev`로 실행해보시면 됩니다.

```bash
$ npm install

# development
$ npm run dev

# production
$ npm run build

$ npm run start
```

### 구현된 화면
main
<br />
![main](https://user-images.githubusercontent.com/98644969/199523511-251e3796-a664-4a6a-ac49-ae95f26b7322.png)

my region
<br />
![image](https://user-images.githubusercontent.com/98644969/199526182-4513898e-e624-4b17-b976-d2213f99314e.png)

favorite
<br />
![image](https://user-images.githubusercontent.com/98644969/199526786-013ff686-775f-4c2e-87be-6f2aa3eeaccb.png)

select region
<br />
![image](https://user-images.githubusercontent.com/98644969/199526977-2bd77040-5f38-4c89-adfd-103b630a4668.png)

dark mode
<br />
![image](https://user-images.githubusercontent.com/98644969/199527290-d47ab05d-c532-408a-91b8-7d3c1ff78358.png)

