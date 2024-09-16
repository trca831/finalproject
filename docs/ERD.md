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
    
    KITS {
        int id PK
        varchar name
        text description
        datetime created_at
    }
    
    KIT_ITEMS {
        int id PK
        varchar name
        text description
        int kit_id FK
        datetime created_at
    }
    
    KIT_REQUESTS {
        int id PK
        int teacher_id FK
        int kit_id FK
        varchar grade_level
        varchar school_year
        datetime created_at
    }

    
    SCHOOLS ||--o{ TEACHERS : "employs"
    TEACHERS ||--o{ KIT_REQUESTS : "places"
    KITS ||--o{ KIT_REQUESTS : "requested by"
    KITS ||--o{ KIT_ITEMS : "contains"