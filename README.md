<div align="center" style="display:flex; align-items:center; justify-content:center; flex-direction:column; gap:10px">
    <img src="./readme.jpg" alt="Logo" style="width:100px; height:100px; object-fit:cover;"/>
    <h2>Next.js 14 Authentication</h2>
</div>

### Live Link

[https://nextjs-authentication-lilac-tau.vercel.app/](https://nextjs-authentication-lilac-tau.vercel.app/)

### Uygulama Açıklaması

Bu proje, Next.js kullanılarak geliştirilmiş bir web uygulamasıdır ve kullanıcı kimlik doğrulama (authentication) işlemleri içermektedir.

Kullanıcı kimlik doğrulama ve oturum yönetimi işlemlerini nasıl gerçekleştirebileceğinizi öğrenebilirsiniz. Aşağıda, projenizdeki ana işlevlerin kısa açıklamaları bulunmaktadır:

#### Form Yönetimi ve Validasyonu
- **useFormStatus ile Form Yönetimi**: Bu hook ile form yönetimi işlemlerini kolayca yapabilirsiniz.
- **zod ile Form Validasyonu**: `zod` kütüphanesini kullanarak form verilerini doğrulayabilirsiniz. `SignupFormSchema` ve `LoginFormSchema` ile form alanlarının doğru şekilde doldurulup doldurulmadığını kontrol edebilirsiniz.

#### Token Oluşturma ve Yönetimi
- **jose ve bcrypt ile Token Oluşturma**: Kullanıcı oturumu oluşturmak ve yönetmek için `jose` kütüphanesi ile JWT (JSON Web Token) oluşturabilir ve `bcrypt` kullanarak şifreleri güvenli bir şekilde saklayabilirsiniz.
  - `createSession`: Kullanıcı oturumu oluşturur ve bir JWT döner.
  - `decrypt`: JWT’yi çözerek oturum bilgilerini elde eder.
  - `verifySession`: Kullanıcı oturumunu doğrular.
  - `deleteSession`: Kullanıcı oturumunu sonlandırır.

#### Middleware ile Kullanıcı Yönlendirme
- **Kullanıcı Yönlendirme**: `middleware` kullanarak, kullanıcının oturum durumuna göre sayfalara erişimini kontrol edebilirsiniz.
  - Korumalı rotalara (`/dashboard`) erişmeye çalışan ve oturumu olmayan kullanıcılar `/login` sayfasına yönlendirilir.
  - Oturumu olan kullanıcılar, oturum gerektirmeyen rotalara (`/login`, `/signup`, `/`) erişmeye çalıştıklarında `/dashboard` sayfasına yönlendirilir.

#### Kullanıcı İşlemleri
- **Kayıt ve Giriş İşlemleri**: `signup` ve `login` fonksiyonları ile kullanıcı kayıt ve giriş işlemlerini gerçekleştirebilirsiniz.
  - `signup`: Yeni kullanıcı oluşturur, şifreyi hashler ve oturum oluşturur.
  - `login`: Kullanıcının giriş bilgilerini doğrular ve başarılı giriş durumunda oturum oluşturur.
  - `logout`: Kullanıcı oturumunu sonlandırır.

#### Kullanıcı Verisi Erişimi
- **Kullanıcı Verisine Erişim**: `getUser` fonksiyonu ile oturum bilgilerine dayanarak kullanıcı verilerine erişebilirsiniz.

Bu proje ile, Next.js kullanarak güvenli bir kullanıcı kimlik doğrulama ve oturum yönetimi sistemi nasıl oluşturulacağını öğrenebilirsiniz.

### Uygulamayı Yerel Ortamda Çalıştırma

Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları takip edebilirsiniz:

1. Projeyi Klonlayın

    ```bash
    git clone https://github.com/enesdmc0/Nextjs-Authentication
    cd Nextjs-Authentication
    ```

2. Bağımlılıkları Yükleyin

    ```bash
    bun install
    ```

3. Çevresel Değişkenleri Ayarlayın

    `.env` dosyası oluşturun ve aşağıdaki parametreyi ekleyin:

    ```bash
    SECRET=test
    ```

4. Uygulamayı Başlatın

    ```bash
    bun run dev
    ```

## Kullanılan Teknolojiler

- [ ] Next.js 14
- [ ] TypeScript
- [ ] Tailwind CSS
- [ ] React Hook Form - zod
- [ ] Shadcn UI
- [ ] Bcrypt.js
- [ ] Zod

## Project Link

[**https://github.com/enesdmc0/Nextjs-Authentication**](https://github.com/enesdmc0/Nextjs-Authentication)

## Contact

- **Email**: [enesdmcc@gmail.com](mailto:enesdmcc@gmail.com)
- **LinkedIn**: [enesdemirci1](https://linkedin.com/in/enesdemirci1)
