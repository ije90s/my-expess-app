## 람다 express 테스트

- 람다 함수에서 express 띄우기 테스트
- sam 이용하여 빌드, 배포

## 필수 설치

- aws-cli, sam-cli 설치
- aws-cli 쓰기 위해 자격 증명 필요

  secre_key에서 /(슬래시)가 있으면 자격 증명 오류 발생하므로, iam에서 액세스 발급 시 주의

  ```
  -- 자격증명 설정
  aws configure

  -- 자격증명 확인
  aws configure list
  ```

## 빌드 및 배포

- 배포 후에 gateway API URL을 포스트맨 or curl을 이용하여 제대로 띄워졌는지 확인

```
-- 빌드
sam build

-- 첫 배포
sam deploy --guided

-- 배포
sam deploy
```
