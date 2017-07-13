## RAID

Redundant Array of Inexpensive / Independent Disks

여러 개의 하드디스크를 하나의 하드디스크 처럼 사용하는 방식 ( SSD 의 구성방식)

#### RAID0

- 최소 필요 하드 갯수 : 2개 이상
- 용량 : 1TB + 1TB => 2TB  /  1TB + 10TB => 2TB ( 동일 용량 , 모델로 구성하는 것이 효율 및 안정적 )
- 저장 방식 : 동시저장 ( **스트라이핑** 방식 )
- 장점 : 저장되는 시간 / 속도 측면에서 가장 우세
- 단점 : 하나의 하드디스크만 고장나도 데이터 손실
- Read / Write ( 각각 1의 속도 가정 ) :  2 / 2

#### RAID1

- 최소 필요 하드 갯수 : 2개 이상
- 용량 : 1TB + 1TB => 1TB
- 저장 방식 : 같은 데이터를 2개의 하드에 저장 ( **미러링** 방식 )
- 장점 : 안정적
- 단점 : 저장 공간이 비교적 적음
- Read / Write ( 각각 1의 속도 가정 ) :  2 / 1

#### RAID5

- 최소 필요 하드 갯수 : 3개 이상 ( 대개 5개 이상의 하드로 구성 )
- 용량 : 1TB + 1TB + 1TB => 2TB ( 한개의 하드는 Parity , 하드 갯수가 N 개면 N-1 만큼의 공간 사용 가능 )
- 저장 방식 : 동시저장 및 1개의 하드에 Parity 를 이용하여 데이터 복구
- 장점 : 결함 허용
- 단점 : 복구 시간이 오래 걸림
- Read / Write ( 각각 1의 속도 가정 ) :  2 / 2

#### RAID10

- 최소 필요 하드 갯수 : 4개 이상
- 용량 : 1TB + 1TB + 1TB + 1TB => 2TB ( (1TB + 1TB = 1TB) + (1TB + 1TB = 1TB) = 2TB )
- 저장 방식 : RAID1 방식으로 2개씩 구성 후 RAID0 방식으로 구성되어 있어 해당 방식을 따름
- 장점 :  RAID1 의 신뢰성과 RAID0 의 성능을 동시에 확보
- Read / Write ( 각각 1의 속도 가정 ) :  4 / 2



### RAID 구성 방법

1. 필요한 하드디스크 추가

2. 추가한 하드디스크를 다음과 같이 확인

   ~~~
   >> ls -al /dev/sd*
   ~~~

3.  파티션 생성

   ~~~
   >> fdisk /dev/sdb

   Command : n ( /dev/sdb 하드 파티션 분할 )
   primary partition
   Partition number : 1
   other options : default or User want option
   Command : t ( 파일 시스템 유형 선택 )
   Hex code : fd
   Command : p ( 잘되었는지 확인 )
   Command : w ( 저장 )
   ~~~

4. /dev/md 생성

   ~~~
   >> mknod /dev/md{{number}} b 9 {{RAID level}}
   ~~~

5. RAID 구축

   ~~~
   >> mdadm --create /dev/md{{number}} --level={{RAID level}} --raid-devices={{device number}} {{devices}}
   ~~~

6.  파일 시스템 생성

   ~~~
   >> mkfs -t {{file system format (ex. ext4 .. )}} /dev/md{{number}}
   ~~~

7. 마운트 디렉토리 생성

   ~~~
   >> mkdir /raid{{RAID level}}
   ~~~

8.  마운트

   ~~~
   >> mount /dev/md{{number}} /raid{{RAID level}}
   ~~~

9.  부팅시 자동 마운트 옵션 적용

   ~~~
   >> vim /etc/fstab 
   ...
   /dev/md{{number}}	/raid{{RAID number}}	{{file system format}}	defaults 1 2
   ~~~

10.  구축한 RAID 확인

  ~~~
  >> mdadm --detail --scan 
  >> mdadm --detail /dev/md{{number}}
  ~~~




참조 사이트 : http://klero.tistory.com/entry/RAID-%EC%9D%B4%EB%A1%A0-%EB%B0%8F-Linux%EC%97%90-RAID-%EA%B5%AC%EC%B6%95%ED%95%98%EA%B8%B0