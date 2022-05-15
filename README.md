# 영화 검색 어플리케이션

## 실행
`yarn install` 이후 `yarn start`

배포는 하지 못했습니다.

## 구현 세부 사항
### 기본 화면

검색 화면이 먼저 나오고 빈 검색화면에서는 검색결과가 없다는 메시지 출력

하단의 검색 즐겨찾기 버튼으로 페이지를 이동할 수 있다

 ![image](https://user-images.githubusercontent.com/56039591/168459504-e57f1bef-5f40-4cd0-a4ca-bca5205a7a3c.png)
 

### 검색 페이지
검색어 입력하여 검색 -> 검색결과로 받아온 영화목록 출력.

스크롤하여 페이지의 마지막 리스트가 화면에 보이면 다음 페이지를 출력

![movie_search](https://user-images.githubusercontent.com/56039591/168459683-3f7239cf-179d-44c4-b6cc-346c8a1c8aa2.gif)

### 즐겨찾기 추가/제거 모달
리스트의 영화를 클릭하면 모달 생성

즐겨찾기에 추가하거나 즐겨찾기된 영화라면 즐겨찾기에서 제거 할 수 있다.

![movie_addBookmark](https://user-images.githubusercontent.com/56039591/168459811-bdcaed4a-dfc0-4cb7-9112-1d2d4ab6692a.gif)


### 즐겨찾기 페이지

즐겨찾기에 추가된 영화들 목록을 확인할 수 있다. localStorage에 저장되어 다시 실행해도 유지된다.

드래그하여 순서를 바꿀 수 있다.

![movie_bookmarkPage](https://user-images.githubusercontent.com/56039591/168459884-60a7315e-dc0c-495a-8091-dfa927cc9071.gif)
