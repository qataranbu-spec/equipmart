// UI → API mapping with optional transformations for all components and pages
const uiToApiMap = {
  // User/Contact Information
  firstName: {
    key: "first_name",
    toApi: (value) => value?.trim(),
    toUi: (value) => value,
  },
  lastName: {
    key: "last_name", 
    toApi: (value) => value?.trim(),
    toUi: (value) => value,
  },
  email: {
    key: "email_address",
    toApi: (value) => value?.toLowerCase()?.trim(),
    toUi: (value) => value,
  },
  phone: {
    key: "phone_number",
    toApi: (value) => value?.replace(/\D/g, ""), // remove non-digits
    toUi: (value) => value,
  },
  contactName: {
    key: "contact_name",
    toApi: (value) => value?.trim(),
    toUi: (value) => value,
  },
  contactEmail: {
    key: "contact_email",
    toApi: (value) => value?.toLowerCase()?.trim(),
    toUi: (value) => value,
  },
  contactPhone: {
    key: "contact_phone",
    toApi: (value) => value?.replace(/\D/g, ""),
    toUi: (value) => value,
  },
  contactPerson: {
    key: "contact_person",
    toApi: (value) => value?.trim(),
    toUi: (value) => value,
  },

  // Company Information
  companyName: {
    key: "company_name",
    toApi: (value) => value?.trim(),
    toUi: (value) => value,
  },
  company: {
    key: "company_name",
    toApi: (value) => value?.trim(),
    toUi: (value) => value,
  },
  website: {
    key: "website_url",
    toApi: (value) => {
      if (!value) return value;
      const url = value.trim();
      return url.startsWith('http') ? url : `https://${url}`;
    },
    toUi: (value) => value,
  },
  address: {
    key: "business_address",
    toApi: (value) => value?.trim(),
    toUi: (value) => value,
  },
  country: {
    key: "country_code",
    toApi: (value) => value?.toLowerCase(),
    toUi: (value) => value,
  },
  location: {
    key: "location_address",
    toApi: (value) => value?.trim(),
    toUi: (value) => value,
  },
  jobTitle: {
    key: "job_title",
    toApi: (value) => value?.trim(),
    toUi: (value) => value,
  },

  // Equipment Information
  title: {
    key: "listing_title",
    toApi: (value) => value?.trim(),
    toUi: (value) => value,
  },
  category: {
    key: "equipment_category",
    toApi: (value) => value?.toLowerCase(),
    toUi: (value) => value,
  },
  brand: {
    key: "equipment_brand",
    toApi: (value) => value?.toLowerCase(),
    toUi: (value) => value,
  },
  model: {
    key: "equipment_model",
    toApi: (value) => value?.trim()?.toUpperCase(),
    toUi: (value) => value,
  },
  year: {
    key: "manufacture_year",
    toApi: (value) => value ? parseInt(value) : null,
    toUi: (value) => value?.toString(),
  },
  hours: {
    key: "operating_hours",
    toApi: (value) => value ? parseInt(value?.replace(/,/g, "")) : null,
    toUi: (value) => value?.toLocaleString(),
  },
  condition: {
    key: "equipment_condition",
    toApi: (value) => value?.toLowerCase(),
    toUi: (value) => value,
  },
  price: {
    key: "asking_price",
    toApi: (value) => value ? parseFloat(value?.replace(/[,$]/g, "")) : null,
    toUi: (value) => value?.toLocaleString('en-US', { style: 'currency', currency: 'USD' }),
  },
  description: {
    key: "equipment_description",
    toApi: (value) => value?.trim(),
    toUi: (value) => value,
  },

  // Supplier Information
  supplierType: {
    key: "supplier_type",
    toApi: (value) => value?.toLowerCase()?.replace(' ', '_'),
    toUi: (value) => value?.replace('_', ' ')?.replace(/\b\w/g, l => l.toUpperCase()),
  },
  yearsInBusiness: {
    key: "years_in_business",
    toApi: (value) => value,
    toUi: (value) => value,
  },
  productCategories: {
    key: "product_categories",
    toApi: (value) => value?.split(',').map(cat => cat.trim().toLowerCase()),
    toUi: (value) => Array.isArray(value) ? value.join(', ') : value,
  },
  brands: {
    key: "represented_brands", 
    toApi: (value) => value?.split(',').map(brand => brand.trim()),
    toUi: (value) => Array.isArray(value) ? value.join(', ') : value,
  },
  inventorySize: {
    key: "inventory_size",
    toApi: (value) => value,
    toUi: (value) => value,
  },
  companyDescription: {
    key: "company_description",
    toApi: (value) => value?.trim(),
    toUi: (value) => value,
  },

  // Project Information
  name: {
    key: "project_name",
    toApi: (value) => value?.trim(),
    toUi: (value) => value,
  },
  status: {
    key: "project_status",
    toApi: (value) => value?.toLowerCase(),
    toUi: (value) => value?.charAt(0).toUpperCase() + value?.slice(1),
  },
  duration: {
    key: "project_duration",
    toApi: (value) => value?.trim(),
    toUi: (value) => value,
  },
  equipment: {
    key: "required_equipment",
    toApi: (value) => Array.isArray(value) ? value : value?.split(',').map(eq => eq.trim()),
    toUi: (value) => Array.isArray(value) ? value : [value],
  },
  budget: {
    key: "project_budget",
    toApi: (value) => value ? parseFloat(value?.replace(/[,$KM]/g, "")) : null,
    toUi: (value) => value,
  },
  quantity: {
    key: "equipment_quantity",
    toApi: (value) => value ? parseInt(value?.replace(/[^\d]/g, "")) : null,
    toUi: (value) => value,
  },
  urgency: {
    key: "urgency_level",
    toApi: (value) => value?.toLowerCase(),
    toUi: (value) => value?.charAt(0).toUpperCase() + value?.slice(1),
  },

  // Authentication & General
  password: {
    key: "password_hash",
    toApi: (value) => value, // Password hashing should be handled separately
    toUi: (value) => "", // Never return passwords to UI
  },
  subject: {
    key: "inquiry_subject",
    toApi: (value) => value?.trim(),
    toUi: (value) => value,
  },
  message: {
    key: "inquiry_message",
    toApi: (value) => value?.trim(),
    toUi: (value) => value,
  },
  type: {
    key: "entity_type",
    toApi: (value) => value?.toLowerCase()?.replace(' ', '_'),
    toUi: (value) => value?.replace('_', ' ')?.replace(/\b\w/g, l => l.toUpperCase()),
  },
  established: {
    key: "established_year",
    toApi: (value) => value ? parseInt(value) : null,
    toUi: (value) => value?.toString(),
  },
  employees: {
    key: "employee_count",
    toApi: (value) => {
      if (!value) return null;
      const numMatch = value.match(/\d+/);
      return numMatch ? parseInt(numMatch[0]) : null;
    },
    toUi: (value) => value ? `${value}+` : value,
  },
  rating: {
    key: "average_rating",
    toApi: (value) => value ? parseFloat(value) : null,
    toUi: (value) => value ? parseFloat(value).toFixed(1) : value,
  },
  reviews: {
    key: "review_count",
    toApi: (value) => value ? parseInt(value) : null,
    toUi: (value) => value?.toString(),
  },
  verified: {
    key: "is_verified",
    toApi: (value) => Boolean(value),
    toUi: (value) => Boolean(value),
  },

  // Date fields
  dateOfBirth: {
    key: "date_of_birth",
    toApi: (value) => value, // already ISO string
    toUi: (value) => value ? new Date(value).toLocaleDateString() : value,
  },
  createdAt: {
    key: "created_at",
    toApi: (value) => value,
    toUi: (value) => value ? new Date(value).toLocaleDateString() : value,
  },
  updatedAt: {
    key: "updated_at", 
    toApi: (value) => value,
    toUi: (value) => value ? new Date(value).toLocaleDateString() : value,
  },

  // Location specific
  city: {
    key: "city_name",
    toApi: (value) => value?.trim(),
    toUi: (value) => value,
  },
  state: {
    key: "state_province",
    toApi: (value) => value?.trim(),
    toUi: (value) => value,
  },
  zipCode: {
    key: "postal_code",
    toApi: (value) => value?.replace(/\s/g, ""),
    toUi: (value) => value,
  },

  // File uploads
  documents: {
    key: "uploaded_documents",
    toApi: (value) => value, // File handling should be done separately
    toUi: (value) => value,
  },
  photos: {
    key: "equipment_photos",
    toApi: (value) => value,
    toUi: (value) => value,
  },
};

// Auto-generate API → UI map
const apiToUiMap = Object.fromEntries(
  Object.entries(uiToApiMap).map(([uiKey, { key, toUi, toApi }]) => [
    key,
    { key: uiKey, toUi, toApi },
  ])
);

// Generic mapper function
function mapData(data, mapping, direction) {
  if (!data || typeof data !== 'object') return data;
  
  const result = {};
  Object.entries(mapping).forEach(([fromKey, { key: toKey, toApi, toUi }]) => {
    if (data.hasOwnProperty(fromKey)) {
      const value = data[fromKey];
      try {
        result[toKey] = direction === "uiToApi"
          ? toApi ? toApi(value) : value
          : toUi ? toUi(value) : value;
      } catch (error) {
        console.warn(`Error transforming ${fromKey}:`, error);
        result[toKey] = value; // fallback to original value
      }
    }
  });
  return result;
}

// Exported transformation functions
export function mapUiToApi(uiValues) {
  return mapData(uiValues, uiToApiMap, "uiToApi");
}

export function mapApiToUi(apiValues) {
  return mapData(apiValues, apiToUiMap, "apiToUi");
}

// Utility function to map arrays of objects
export function mapArrayUiToApi(uiArray) {
  return Array.isArray(uiArray) ? uiArray.map(mapUiToApi) : uiArray;
}

export function mapArrayApiToUi(apiArray) {
  return Array.isArray(apiArray) ? apiArray.map(mapApiToUi) : apiArray;
}

// Partial mapping functions for specific forms
export function mapContactFormUiToApi(formData) {
  const contactFields = ['firstName', 'lastName', 'email', 'phone', 'company', 'subject', 'message'];
  const filteredData = Object.fromEntries(
    Object.entries(formData).filter(([key]) => contactFields.includes(key))
  );
  return mapUiToApi(filteredData);
}

export function mapEquipmentFormUiToApi(formData) {
  const equipmentFields = ['title', 'category', 'brand', 'model', 'year', 'hours', 'condition', 'price', 'location', 'description', 'contactName', 'contactEmail', 'contactPhone'];
  const filteredData = Object.fromEntries(
    Object.entries(formData).filter(([key]) => equipmentFields.includes(key))
  );
  return mapUiToApi(filteredData);
}

export function mapSupplierFormUiToApi(formData) {
  const supplierFields = ['companyName', 'supplierType', 'contactPerson', 'jobTitle', 'email', 'phone', 'website', 'address', 'country', 'yearsInBusiness', 'productCategories', 'brands', 'inventorySize', 'companyDescription'];
  const filteredData = Object.fromEntries(
    Object.entries(formData).filter(([key]) => supplierFields.includes(key))
  );
  return mapUiToApi(filteredData);
}

export function mapAuthFormUiToApi(formData) {
  const authFields = ['email', 'password', 'firstName', 'lastName'];
  const filteredData = Object.fromEntries(
    Object.entries(formData).filter(([key]) => authFields.includes(key))
  );
  return mapUiToApi(filteredData);
}

// Default export with all mappings
export default { 
  uiToApiMap, 
  apiToUiMap,
  mapUiToApi,
  mapApiToUi,
  mapArrayUiToApi,
  mapArrayApiToUi,
  mapContactFormUiToApi,
  mapEquipmentFormUiToApi,
  mapSupplierFormUiToApi,
  mapAuthFormUiToApi
};