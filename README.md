### My Market E-Shop Application🛒

A full-featured, responsive supermarket e-commerce web application built with React. The application features distinct user roles (Customers & Administrators), dynamic product management, a shopping cart, order history, a favorites system, product reviews, and complete data persistence via LocalStorage.

* **Live Application
[https://mtsagkl.github.io/my-market-eshop/](https://mtsagkl.github.io/my-market-eshop/)**

### Authentication
Credential Routing:
* **Administrator: Exclusive access via username: admin and password: admin.**
* **Customer: Any other username is treated as a customer account.**
Auto-Registration: If an entered username does not exist, the system redirects to a quick profile setup to automatically register a new customer account.

---

### Customer Features
Product Browsing & Search:
* **Real-time search filtering by product title.**
* **Category filtering (e.g., Fresh Produce, Alcoholic Beverages, Cleaning Supplies) via the navigation sidebar.**
* **Dedicated "🏷️ Deals" filter to isolate discounted items.**
Shopping Cart (Sidebar):
* **Add/remove items and adjust quantities.**
* **Dynamic total price calculation reflecting active discounts.**
* **Stock Validation: Real-time stock checking prevents users from adding more items than available.**
Checkout & Order History:
* **Placing an order automatically decrements available store stock in real-time.**
* **Saved order records include timestamp, itemized breakdown, and final cost.**
* **Slide-out order history panel for tracking past purchases.**
Wishlist / Favorites:
* **One-click favorite toggling (heart icon).**
* **Direct "Add to Cart" functionality directly from the Favorites sidebar panel.**
Product Rating System:
* **1-to-5 star rating interface with dynamic fractional star rendering for average scores.**
* **Vote locking: Restricted to one vote per user per product.**

---

### Administrator Features
Add New Product:
* **Form inputs for title, description, price, discount percentage, stock, category, and unit type (kg/pcs).**
* **Image Upload: Supports image URLs or local image uploads (converted to Base64).**
Product Management & Edit Modal:
* **Modal interface to update product attributes (pricing, stock, discount, images).**
* **Cascading Updates: Changing a product's price or title automatically updates existing active customer carts and wishlists.**
Product Deletion:
* **Permanent removal of products from the store database.**
* **Automatic cleanup: Deleted products are instantly stripped from active customer carts and wishlists across the platform.**
Admin View Isolation:
* **Customer-specific actions (e.g., "Add to Cart", "Favorites", Checkout) and customer sidebars are hidden in the admin dashboard.**

---

### LocalStorage Data Schema
The application uses the following LocalStorage keys for state persistence:
* **app_products: Master array containing all store products.**
* **app_users: Array of registered customer accounts.**
* **app_orders: Global log of all completed purchases.**
* **app_favorites: User-indexed wishlist map.**
* **app_userVotes: Rating records mapping (userId + productId + rating).**
* **cart_[username]: Dedicated shopping cart instance for each specific customer.**

--- 

### Tech Stack
* **Frontend Framework:** [React.js](https://react.dev/)
* **Build Tool:** [Vite](https://vitejs.js.org/)
* **Deployment:** [GitHub Pages](https://pages.github.com/) (`gh-pages`)
* **State & Persistence:** React Hooks (`useState`, `useEffect`) & `localStorage`
* **Styling:** CSS3 (Responsive Design, Flexbox/Grid)

---

