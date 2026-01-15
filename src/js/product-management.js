document.addEventListener('alpine:init', () => {
  Alpine.data('productManagement', () => ({
    // State
    products: [
      {
        id: 'PRD001',
        sku: 'VAN-5L-NAP',
        name: 'Vanilla Bean 5L Napoli',
        category: 'Dairy Ice Cream',
        basePrice: 24.50,
        stock: 145,
        status: 'active',
        lastSync: '2025-01-20 14:30:00'
      },
      {
        id: 'PRD002',
        sku: 'SAL-5L-NAP',
        name: 'Salted Caramel 5L Napoli',
        category: 'Dairy Ice Cream',
        basePrice: 26.00,
        stock: 98,
        status: 'active',
        lastSync: '2025-01-20 14:30:00'
      },
      {
        id: 'PRD003',
        sku: 'CHO-5L-NAP',
        name: 'Serious Chocolate 5L Napoli',
        category: 'Dairy Ice Cream',
        basePrice: 26.00,
        stock: 112,
        status: 'active',
        lastSync: '2025-01-20 14:30:00'
      },
      {
        id: 'PRD004',
        sku: 'STR-5L-NAP',
        name: 'Strawberries & Cream 5L Napoli',
        category: 'Dairy Ice Cream',
        basePrice: 26.00,
        stock: 87,
        status: 'active',
        lastSync: '2025-01-20 14:30:00'
      },
      {
        id: 'PRD005',
        sku: 'MIN-5L-NAP',
        name: 'Mint Choc Chip 5L Napoli',
        category: 'Dairy Ice Cream',
        basePrice: 26.00,
        stock: 64,
        status: 'active',
        lastSync: '2025-01-20 14:30:00'
      },
      {
        id: 'PRD006',
        sku: 'CLO-5L-NAP',
        name: 'Clotted Cream 5L Napoli',
        category: 'Dairy Ice Cream',
        basePrice: 28.00,
        stock: 52,
        status: 'active',
        lastSync: '2025-01-20 14:30:00'
      },
      {
        id: 'PRD007',
        sku: 'HON-5L-NAP',
        name: 'Honeycomb 5L Napoli',
        category: 'Dairy Ice Cream',
        basePrice: 26.00,
        stock: 73,
        status: 'active',
        lastSync: '2025-01-20 14:30:00'
      },
      {
        id: 'PRD008',
        sku: 'VAN-2L-TUB',
        name: 'Vanilla Bean 2L Tub',
        category: 'Dairy Ice Cream',
        basePrice: 12.50,
        stock: 234,
        status: 'active',
        lastSync: '2025-01-20 14:30:00'
      },
      {
        id: 'PRD009',
        sku: 'SAL-2L-TUB',
        name: 'Salted Caramel 2L Tub',
        category: 'Dairy Ice Cream',
        basePrice: 13.50,
        stock: 189,
        status: 'active',
        lastSync: '2025-01-20 14:30:00'
      },
      {
        id: 'PRD010',
        sku: 'CHO-2L-TUB',
        name: 'Serious Chocolate 2L Tub',
        category: 'Dairy Ice Cream',
        basePrice: 13.50,
        stock: 156,
        status: 'active',
        lastSync: '2025-01-20 14:30:00'
      },
      {
        id: 'PRD011',
        sku: 'VAN-500-TUB',
        name: 'Vanilla Bean 500ml Tub',
        category: 'Dairy Ice Cream',
        basePrice: 5.95,
        stock: 312,
        status: 'active',
        lastSync: '2025-01-20 14:30:00'
      },
      {
        id: 'PRD012',
        sku: 'MAN-5L-NAP',
        name: 'Mango Sorbet 5L Napoli',
        category: 'Sorbet',
        basePrice: 24.00,
        stock: 45,
        status: 'active',
        lastSync: '2025-01-20 14:30:00'
      },
      {
        id: 'PRD013',
        sku: 'LEM-5L-NAP',
        name: 'Lemon Sorbet 5L Napoli',
        category: 'Sorbet',
        basePrice: 24.00,
        stock: 67,
        status: 'active',
        lastSync: '2025-01-20 14:30:00'
      },
      {
        id: 'PRD014',
        sku: 'RAS-5L-NAP',
        name: 'Raspberry Sorbet 5L Napoli',
        category: 'Sorbet',
        basePrice: 24.00,
        stock: 38,
        status: 'active',
        lastSync: '2025-01-20 14:30:00'
      },
      {
        id: 'PRD015',
        sku: 'PAS-5L-NAP',
        name: 'Passion Fruit Sorbet 5L Napoli',
        category: 'Sorbet',
        basePrice: 25.00,
        stock: 29,
        status: 'active',
        lastSync: '2025-01-20 14:30:00'
      },
      {
        id: 'PRD016',
        sku: 'VEG-VAN-5L',
        name: 'Vegan Vanilla 5L Napoli',
        category: 'Vegan Ice Cream',
        basePrice: 28.00,
        stock: 34,
        status: 'active',
        lastSync: '2025-01-20 14:30:00'
      },
      {
        id: 'PRD017',
        sku: 'VEG-CHO-5L',
        name: 'Vegan Chocolate 5L Napoli',
        category: 'Vegan Ice Cream',
        basePrice: 28.00,
        stock: 28,
        status: 'active',
        lastSync: '2025-01-20 14:30:00'
      },
      {
        id: 'PRD018',
        sku: 'COF-5L-NAP',
        name: 'Coffee 5L Napoli',
        category: 'Dairy Ice Cream',
        basePrice: 26.00,
        stock: 41,
        status: 'active',
        lastSync: '2025-01-20 14:30:00'
      },
      {
        id: 'PRD019',
        sku: 'PIS-5L-NAP',
        name: 'Pistachio 5L Napoli',
        category: 'Dairy Ice Cream',
        basePrice: 32.00,
        stock: 18,
        status: 'active',
        lastSync: '2025-01-20 14:30:00'
      },
      {
        id: 'PRD020',
        sku: 'RUM-5L-NAP',
        name: 'Rum & Raisin 5L Napoli',
        category: 'Dairy Ice Cream',
        basePrice: 26.00,
        stock: 0,
        status: 'inactive',
        lastSync: '2025-01-20 14:30:00'
      }
    ],

    // Available options
    allCategories: ['Dairy Ice Cream', 'Vegan Ice Cream', 'Sorbet'],

    // Filters
    searchQuery: '',
    filterCategory: 'all',
    filterStatus: 'all',

    // Modals
    editProductModal: false,

    // Forms
    editingProduct: null,

    // Success message
    successMessage: '',

    // Computed: Filtered products
    get filteredProducts() {
      return this.products.filter(product => {
        if (this.filterCategory !== 'all' && product.category !== this.filterCategory) return false;
        if (this.filterStatus !== 'all' && product.status !== this.filterStatus) return false;
        if (this.searchQuery) {
          const query = this.searchQuery.toLowerCase();
          return product.name.toLowerCase().includes(query) ||
                 product.sku.toLowerCase().includes(query) ||
                 product.category.toLowerCase().includes(query);
        }
        return true;
      });
    },

    // Methods
    openEditProduct(product) {
      this.editingProduct = JSON.parse(JSON.stringify(product));
      this.editProductModal = true;
    },

    saveProduct() {
      const index = this.products.findIndex(p => p.id === this.editingProduct.id);
      if (index > -1) {
        this.products[index] = this.editingProduct;
      }
      this.editProductModal = false;
      this.showSuccess('Product updated successfully');
    },

    toggleProductStatus(product) {
      product.status = product.status === 'active' ? 'inactive' : 'active';
      this.showSuccess('Product status updated');
    },

    showSuccess(message) {
      this.successMessage = message;
      setTimeout(() => { this.successMessage = ''; }, 3000);
    },

    formatDate(dateStr) {
      const date = new Date(dateStr);
      const now = new Date();
      const diffMs = now - date;
      const diffMins = Math.floor(diffMs / 60000);
      const diffHours = Math.floor(diffMs / 3600000);

      if (diffMins < 60) return diffMins + 'm ago';
      if (diffHours < 24) return diffHours + 'h ago';
      return date.toLocaleDateString();
    }
  }));
});
