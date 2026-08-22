My Market E-Shop Application🛒

A full-featured, responsive supermarket e-commerce web application built with React. The application features distinct user roles (Customers & Administrators), dynamic product management, a shopping cart, order history, a favorites system, product reviews, and complete data persistence via LocalStorage.
Live Application
[https://mtsagkl.github.io/my-market-eshop/](https://mtsagkl.github.io/my-market-eshop/)**

## Χαρακτηριστικά (Features)

### Δικαιώματα & Σύνδεση Χρηστών (Authentication)
* **Εγγραφή & Σύνδεση Χρήστη (Customer Login/Register):** Δυνατότητα δημιουργίας λογαριασμού και εισόδου στην εφαρμογή.
* **Διαχειριστής (Admin Mode):**
    * Είσοδος με `username: admin...` και `password: admin`.
    * Πλήρες περιβάλλον διαχείρισης προϊόντων.

### Λειτουργίες Πελάτη (Customer Features)
* **Πλοήγηση & Αναζήτηση:** Αναζήτηση προϊόντων σε πραγματικό χρόνο και φιλτράρισμα ανά κατηγορία ή προσφορές.
* **Καλάθι Αγορών (Shopping Cart):** Προσθήκη/αφαίρεση προϊόντων, αυτόματος υπολογισμός συνολικού κόστους και ολοκλήρωση παραγγελίας με ενημέρωση αποθέματος.
* **Αγαπημένα (Favorites):** Αποθήκευση αγαπημένων προϊόντων σε ξεχωριστή λίστα.
* **Ιστορικό Παραγγελιών (Order History):** Προβολή προγενέστερων αγορών με ημερομηνία και αναλυτικά στοιχεία.
* **Αξιολογήσεις (Ratings):** Σύστημα βαθμολόγησης προϊόντων με αστέρια (1-5) και υπολογισμός μέσου όρου.

### Λειτουργίες Διαχειριστή (Admin Features)
* **Προσθήκη Νέου Προϊόντος:** Δυνατότητα εισαγωγής τίτλου, περιγραφής, τιμής, έκπτωσης, αποθέματος, κατηγορίας και φωτογραφίας (file upload ή URL).
* **Επεξεργασία Προϊόντος (Edit):** Dynamic modal για την ενημέρωση στοιχείων υπαρχόντων προϊόντων.
* **Διαγραφή Προϊόντος (Delete):** Αφαίρεση προϊόντος από το κατάστημα, τα καλάθια και τα αγαπημένα των χρηστών.

---

### Τεχνολογίες (Tech Stack)

* **Frontend Framework:** [React.js](https://react.dev/)
* **Build Tool:** [Vite](https://vitejs.js.org/)
* **Deployment:** [GitHub Pages](https://pages.github.com/) (`gh-pages`)
* **State & Persistence:** React Hooks (`useState`, `useEffect`) & `localStorage`
* **Styling:** CSS3 (Responsive Design, Flexbox/Grid)

---

