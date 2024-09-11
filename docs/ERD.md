```mermaid
erDiagram
    TEACHERS {
        int id PK
        varchar name
        varchar email
        varchar school
        int school_id FK
        datetime created_at
    }

    SCHOOLS {
        int id PK
        varchar name
        varchar address
        datetime created_at
    }
    
    PACKAGES {
        int id PK
        varchar name
        text description
        datetime created_at
    }
    
    PACKAGE_ITEMS {
        int id PK
        varchar name
        text description
        int package_id FK
        datetime created_at
    }
    
    PACKAGE_REQUESTS {
        int id PK
        int teacher_id FK
        int package_id FK
        varchar grade_level
        varchar school_year
        datetime created_at
    }

    PACKAGE_REQUEST_ITEMS {
        int id PK
        int package_request_id FK
        int package_item_id FK
        datetime created_at
    }

    SCHOOLS ||--o{ TEACHERS : "employs"
    TEACHERS ||--o{ PACKAGE_REQUESTS : "places"
    PACKAGES ||--o{ PACKAGE_REQUESTS : "requested by"
    PACKAGES ||--o{ PACKAGE_ITEMS : "contains"
    PACKAGE_REQUESTS ||--o{ PACKAGE_REQUEST_ITEMS : "contains"
    PACKAGE_ITEMS ||--o{ PACKAGE_REQUEST_ITEMS : "included in"