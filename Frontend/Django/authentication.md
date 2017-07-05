### Authentication

#### 로그인 과정

1. django.contrib.auth.views.login
2. django.contrib.auth.forms.AuthenticationForm
3. django.contrib.auth.authenticate()
4. settings.AUTHENTICATION_BACKENDS 에서 인증 기반을 하나씩 가져옴
5. django.contrib.auth.backends.ModelBackend 의 authenticate(username='', password='') 로 인증 처리
6. django.contrib.auth.auth_login 으로 인증 관련 세션 처리
7. 로그인 이후 이동할 URL 로 이동 처리 (redirect)



#### 로그인 관련 설정 항목 ( settings.py )

- LOGIN_URL - 설정 기본값 /accounts/login/
- LOGOUT_URL - 설정 기본값 /accounts/logout/
- LOGIN_REDIRECT_URL - 로그인 후 이동할 URL 지정 , 지정하지 않안았거나 보안상 문제가 있는 경우 사용



- views
  - login
  - logout - 로그아웃 후 템플릿 출력
  - logout_then_login - 로그아웃 후 로그인 페이지로 이동
  - password_change
  - password_change_done - 비밀번호 변경 후 출력
  - password_reset - 새로운 비밀번호를 이메일로 전달
  - password_reset_done - 비밀번호 리셋 후 출력
  - password_reset_confirm - 비밀번호를 리셋하는 폼 출력
  - password_reset_complete - 비밀번호 리셋 폼에서 정상적으로 리셋된 후 출력
  - redirect_to_login - 로그인 페이지로 이동
- User 관련 주요 함수
  - is_authenticated() - 로그인 여부
  - get_full_name() - 사용자 성과 이름을 출력
  - email.user(subject, message, from_email = None) - 이메일 보내기
  - set_password(raw_password) - 비밀번호 변경 ( 자동 암호화 )
  - check_password(raw_password) - 기존 비밀번호와 일치 검사
- User Models 필드
  - username - 중복되지 않는 고유값
  - passowrd
  - first_name
  - last_name
  - email
  - is_staff - 관리자 여부 ( Boolean )
  - is_active - 활성화 계정 여부 ( Boolean )

