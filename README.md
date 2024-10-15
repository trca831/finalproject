Project Aware
Inclusive Education Support App


Overview
This app provides teachers with resources to support social-emotional learning for all students. It offers free kits containing books with neurodivergent characters, tailored lesson plans by grade levels, and options for scheduling speakers and making donations to support the mission of inclusive education.

![](https://github.com/mhope21/ProjectAware.gif)

Features
Resource Kits: Sign up to receive free kits with books and lesson plans.

Speaker Requests: Request speakers to educate and advocate for neurodivergent individuals.

Donations: In app forms for donations, with no storage of financial data for better security.

User Roles: Role-based access control for administrators and regular users.

File Management: Active Storage for handling image uploads.

Technologies
Backend: Rails API with SQLite3 database.

Frontend: React, styled using Bootstrap.

Authentication: Devise and Devise-JWT for secure token-based authentication.

Authorization: Cancancan for managing user permissions.

File Uploads: Active Storage for managing file attachments.

CORS: Rack CORS for secure frontend-backend communication.

```mermaid

erDiagram
    USERS {
        int id PK
        varchar email
        varchar encrypted_password
        varchar reset_password_token
        datetime reset_password_sent_at
        datetime remember_created_at
        datetime created_at
        datetime updated_at
        varchar jti
        varchar name
        varchar role
    }

    CONTACTS {
        int id PK
        int user_id FK
        varchar name
        varchar email
        varchar phone
        text message
        datetime created_at
        datetime updated_at
    }

    DONATIONS {
        int id PK
        decimal amount
        int user_id FK
        varchar payment_status
        boolean save_payment_info
        varchar payment_token
        boolean canceled
        datetime created_at
        datetime updated_at
    }

    KITS {
        int id PK
        varchar name
        text description
        varchar grade_level
        datetime created_at
        datetime updated_at
    }

    KIT_ITEMS {
        int id PK
        varchar name
        text description
        datetime created_at
        datetime updated_at
    }

    KIT_ITEMS_KITS {
        int kit_id FK
        int kit_item_id FK
    }

    KIT_REQUESTS {
        int id PK
        int kit_id FK
        int user_id FK
        varchar school_year
        varchar phone
        varchar school_name
        varchar school_address
        text comments
        datetime created_at
        datetime updated_at
    }

    ACTIVE_STORAGE_ATTACHMENTS {
        int id PK
        varchar name
        varchar record_type
        int record_id
        int blob_id FK
        datetime created_at
    }

    ACTIVE_STORAGE_BLOBS {
        int id PK
        varchar key
        varchar filename
        varchar content_type
        text metadata
        varchar service_name
        int byte_size
        varchar checksum
        datetime created_at
    }

    ACTIVE_STORAGE_VARIANT_RECORDS {
        int id PK
        int blob_id FK
        varchar variation_digest
    }

    USERS ||--o{ CONTACTS : "has many"
    USERS ||--o{ DONATIONS : "has many"
    USERS ||--o{ KIT_REQUESTS : "submits"
    KITS ||--o{ KIT_ITEMS_KITS : "contains"
    KIT_ITEMS ||--o{ KIT_ITEMS_KITS : "is contained in"
    KITS ||--o{ KIT_REQUESTS : "is requested by"
    ACTIVE_STORAGE_BLOBS ||--o{ ACTIVE_STORAGE_ATTACHMENTS : "is attached to"
    ACTIVE_STORAGE_BLOBS ||--o{ ACTIVE_STORAGE_VARIANT_RECORDS : "has variants"

```




Future Stretch Goals
Fully integrate Stripe for donations.

Visualize data from tables using charts.

Incorporate a 3rd party API for school information.

Improve data integrity by refining table columns.

Complete scheduling speaker events.

Add a forum for teacher communication.

Provide online content for teachers.

Contributing
Feel free to submit issues or pull requests. We welcome contributions to improve the app and support inclusive education!

Created by Marcia Hope
