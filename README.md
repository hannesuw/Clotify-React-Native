# P3-Challenge-2

UI Library: Native base

Server-app: https://johannes-server-app.herokuapp.com/
Server-user: https://johannes-server-user.herokuapp.com/
Server-orchestrator: https://johannes-server-orchestrator.herokuapp.com/
Client: https://expo.dev/@jogans/clotify

Struktur Folder:

- client-mobile
- server
  - orchestrator (port: 4000)
  - orchestrator-express (port: 4000)
  - services
    - users - mongodb (port: 4001)
    - app - postgres (port: 4002)

## W2D2

Target:

- [x] Memahami `react-native` dan `expo`
- [x] Install `expo-cli` & `expo init` & setup project mobile
- [x] Mencoba component Text, View, Image, StyleSheet, Button, ScrollView, FlatList
- [x] Mencoba useState, useEffect dalam react-native
- [x] Hit API server yang sudah dibuat untuk mendapatkan data
- [x] Mengetahui bahwa redux & redux-thunk bisa diimplementasi di react-native
- [x] Memahami `react-native-navigation`
- [x] Memahami Stack Navigation & Tab Navigation
- [x] Membuat min 2 Screen (Home, Detail)

**Report:**

Reference: https://dribbble.com/shots/15217113-Clothing-Store-App/attachments/6962931?mode=media
Saya sudah memahami Core Component dari react native dan sudah mempraktekannya pada challenge kedua ini. Saya juga menerapkan bottom tabs sebagai route react native.

Problem: Image ter-render saat di halaman details

## W2D3

Target:

- [x] Memahami React Native Gesture Handler
- [x] Memahami NoSQL: Mongodb
- [x] Membuat service users dengan Mongodb (Kerjakan di `server/services/users`)
- [x] Membuat action pada users: Read, Create & Delete (Update optional)

**Report:**

- Mengaplikasikan MongoDB pada server user sesuai lecture yang diberikan.
- Menyelesaikan Microservices Challenge#1

## W2D4

Target:

- [x] Membuat Server Baru, Microservices
- [x] Memisahkan service user dan app
- [x] Membuat Orchestrator-express yang bisa komunikasi ke service user dan app
- [x] Memahami cache dalam database
- [x] Install dataabase Redis dan menggunakan ioRedis sebagai cache
- [x] Menjaga relasi User dengan product pada microservice

**Report:**

- Menyelesaikan tugas Microservices
- Tidak banyak kendala saat pengerjaan
- Sudah memahami cara kerja cache redis

## W2D5

Target:

- [x] Memahami GraphQL dan tahu perbedaan dengan RESTful API
- [x] Membuat Orchestrator dengan menggunakan GraphQL
- [x] Memahami Typedefs, Resolvers
- [x] Mampu membuat Query dan Mutation
- [x] Menggunakan redis pada graphql untuk kebutuhan cache server
- [x] Memahami Apollo-Client & Implementasi pada mobile apps
- [x] Memahami cache pada Apollo-Client

**Report:**

- Menerapkan apollo client untuk query pada bagian server dan redis lab untuk cache

## W3D1

Target:

- [x] Memahami Docker
- [x] Implementasi Docker pada aplikasi server

**Report:**

- Mengimplementasikan docker ke server-app, server-user, dan orchestrator