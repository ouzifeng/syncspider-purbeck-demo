document.addEventListener('alpine:init', () => {
  Alpine.data('ordersPanel', () => ({
    // State
    orders: [
      {
        id: 'ORD-2025-0342',
        orderNumber: 'ORD-2025-0342',
        customer: 'The Pig on the Beach',
        category: 'Ice Cream',
        orderDate: '2025-01-20T09:30:00',
        totalValue: 245.50,
        items: 8,
        status: 'shipped',
        notes: 'Weekly restock - dessert menu items',
        orderItems: [
          { sku: 'PIC-VAN-4L', name: 'Vanilla Bean 4L Napoli', quantity: 2, unitPrice: 32.00 },
          { sku: 'PIC-SAL-4L', name: 'Salted Caramel 4L Napoli', quantity: 2, unitPrice: 32.00 },
          { sku: 'PIC-CHO-4L', name: 'Serious Chocolate 4L Napoli', quantity: 2, unitPrice: 32.00 },
          { sku: 'PIC-CLO-4L', name: 'Clotted Cream 4L Napoli', quantity: 2, unitPrice: 34.00 }
        ]
      },
      {
        id: 'ORD-2025-0341',
        orderNumber: 'ORD-2025-0341',
        customer: 'Holme Farm Shop',
        category: 'Ice Cream',
        orderDate: '2025-01-19T14:20:00',
        totalValue: 186.40,
        items: 12,
        status: 'ordered',
        notes: 'Retail restock',
        orderItems: [
          { sku: 'PIC-VAN-500', name: 'Vanilla Bean 500ml', quantity: 6, unitPrice: 6.50 },
          { sku: 'PIC-SAL-500', name: 'Salted Caramel 500ml', quantity: 6, unitPrice: 6.50 },
          { sku: 'PIC-RAS-500', name: 'Raspberry Ripple 500ml', quantity: 6, unitPrice: 6.50 },
          { sku: 'PIC-VAN-2L', name: 'Vanilla Bean 2L', quantity: 4, unitPrice: 18.50 },
          { sku: 'PIC-CHO-2L', name: 'Serious Chocolate 2L', quantity: 4, unitPrice: 18.50 }
        ]
      },
      {
        id: 'ORD-2025-0340',
        orderNumber: 'ORD-2025-0340',
        customer: 'Swanage Beach Cafe',
        category: 'Ice Cream',
        orderDate: '2025-01-18T11:15:00',
        totalValue: 312.00,
        items: 6,
        status: 'delivered',
        notes: 'Scooping parlour restock',
        orderItems: [
          { sku: 'PIC-VAN-5L', name: 'Vanilla Bean 5L Napoli', quantity: 2, unitPrice: 38.00 },
          { sku: 'PIC-STR-5L', name: 'Strawberry 5L Napoli', quantity: 2, unitPrice: 38.00 },
          { sku: 'PIC-MIN-5L', name: 'Mint Choc Chip 5L Napoli', quantity: 2, unitPrice: 38.00 },
          { sku: 'PIC-RAS-SOR-2.5L', name: 'Raspberry Sorbet 2.5L', quantity: 2, unitPrice: 28.00 },
          { sku: 'PIC-MAN-SOR-2.5L', name: 'Mango Sorbet 2.5L', quantity: 2, unitPrice: 28.00 },
          { sku: 'PIC-LEM-SOR-2.5L', name: 'Lemon Sorbet 2.5L', quantity: 2, unitPrice: 28.00 }
        ]
      },
      {
        id: 'ORD-2025-0339',
        orderNumber: 'ORD-2025-0339',
        customer: 'Lulworth Cove Inn',
        category: 'Ice Cream',
        orderDate: '2025-01-17T16:45:00',
        totalValue: 178.00,
        items: 5,
        status: 'delivered',
        notes: 'Pub dessert menu restock',
        orderItems: [
          { sku: 'PIC-VAN-4L', name: 'Vanilla Bean 4L Napoli', quantity: 2, unitPrice: 32.00 },
          { sku: 'PIC-HON-4L', name: 'Honeycombe Hash 4L Napoli', quantity: 1, unitPrice: 32.00 },
          { sku: 'PIC-SAL-4L', name: 'Salted Caramel 4L Napoli', quantity: 1, unitPrice: 32.00 },
          { sku: 'PIC-CLO-4L', name: 'Clotted Cream 4L Napoli', quantity: 1, unitPrice: 34.00 }
        ]
      },
      {
        id: 'ORD-2025-0338',
        orderNumber: 'ORD-2025-0338',
        customer: 'Washingpool Farm Shop',
        category: 'Ice Cream',
        orderDate: '2025-01-16T10:30:00',
        totalValue: 224.00,
        items: 16,
        status: 'delivered',
        notes: 'Weekly retail order',
        orderItems: [
          { sku: 'PIC-VAN-125', name: 'Vanilla Bean 125ml', quantity: 12, unitPrice: 3.20 },
          { sku: 'PIC-SAL-125', name: 'Salted Caramel 125ml', quantity: 12, unitPrice: 3.20 },
          { sku: 'PIC-CHO-125', name: 'Serious Chocolate 125ml', quantity: 12, unitPrice: 3.20 },
          { sku: 'PIC-VAN-2L', name: 'Vanilla Bean 2L', quantity: 4, unitPrice: 18.50 },
          { sku: 'PIC-SAL-2L', name: 'Salted Caramel 2L', quantity: 4, unitPrice: 18.50 }
        ]
      },
      {
        id: 'ORD-2025-0337',
        orderNumber: 'ORD-2025-0337',
        customer: 'Mortons House Hotel',
        category: 'Ice Cream',
        orderDate: '2025-01-15T13:00:00',
        totalValue: 298.00,
        items: 8,
        status: 'delivered',
        notes: 'Restaurant dessert service',
        orderItems: [
          { sku: 'PIC-VAN-4L', name: 'Vanilla Bean 4L Napoli', quantity: 2, unitPrice: 32.00 },
          { sku: 'PIC-CHO-4L', name: 'Serious Chocolate 4L Napoli', quantity: 2, unitPrice: 32.00 },
          { sku: 'PIC-CAP-4L', name: 'Cappuccino 4L Napoli', quantity: 2, unitPrice: 34.00 },
          { sku: 'PIC-RAS-SOR-2.5L', name: 'Raspberry Sorbet 2.5L', quantity: 2, unitPrice: 28.00 },
          { sku: 'PIC-PAS-SOR-2.5L', name: 'Passion Fruit Sorbet 2.5L', quantity: 2, unitPrice: 28.00 }
        ]
      },
      {
        id: 'ORD-2025-0336',
        orderNumber: 'ORD-2025-0336',
        customer: "Trevor's Deli",
        category: 'Ice Cream',
        orderDate: '2025-01-14T09:45:00',
        totalValue: 156.00,
        items: 24,
        status: 'delivered',
        notes: 'Retail tubs for freezer cabinet',
        orderItems: [
          { sku: 'PIC-VAN-500', name: 'Vanilla Bean 500ml', quantity: 8, unitPrice: 6.50 },
          { sku: 'PIC-SAL-500', name: 'Salted Caramel 500ml', quantity: 8, unitPrice: 6.50 },
          { sku: 'PIC-HON-500', name: 'Honeycombe Hash 500ml', quantity: 8, unitPrice: 6.50 }
        ]
      },
      {
        id: 'ORD-2025-0335',
        orderNumber: 'ORD-2025-0335',
        customer: 'Studland Bay House',
        category: 'Ice Cream',
        orderDate: '2025-01-13T15:20:00',
        totalValue: 268.00,
        items: 7,
        status: 'delivered',
        notes: 'Beach cafe summer prep',
        orderItems: [
          { sku: 'PIC-VAN-5L', name: 'Vanilla Bean 5L Napoli', quantity: 2, unitPrice: 38.00 },
          { sku: 'PIC-STR-5L', name: 'Strawberry 5L Napoli', quantity: 2, unitPrice: 38.00 },
          { sku: 'PIC-CHO-5L', name: 'Serious Chocolate 5L Napoli', quantity: 2, unitPrice: 38.00 },
          { sku: 'PIC-MAN-SOR-2.5L', name: 'Mango Sorbet 2.5L', quantity: 2, unitPrice: 28.00 }
        ]
      },
      {
        id: 'ORD-2025-0334',
        orderNumber: 'ORD-2025-0334',
        customer: 'The Castle Inn',
        category: 'Ice Cream',
        orderDate: '2025-01-12T11:30:00',
        totalValue: 194.00,
        items: 6,
        status: 'delivered',
        notes: 'Corfe Castle pub restock',
        orderItems: [
          { sku: 'PIC-VAN-4L', name: 'Vanilla Bean 4L Napoli', quantity: 2, unitPrice: 32.00 },
          { sku: 'PIC-SAL-4L', name: 'Salted Caramel 4L Napoli', quantity: 2, unitPrice: 32.00 },
          { sku: 'PIC-CLO-4L', name: 'Clotted Cream 4L Napoli', quantity: 2, unitPrice: 34.00 }
        ]
      },
      {
        id: 'ORD-2025-0333',
        orderNumber: 'ORD-2025-0333',
        customer: 'Thyme & Tides',
        category: 'Ice Cream',
        orderDate: '2025-01-11T14:00:00',
        totalValue: 185.60,
        items: 20,
        status: 'delivered',
        notes: 'Retail store order',
        orderItems: [
          { sku: 'PIC-VAN-125', name: 'Vanilla Bean 125ml', quantity: 10, unitPrice: 3.20 },
          { sku: 'PIC-SAL-125', name: 'Salted Caramel 125ml', quantity: 10, unitPrice: 3.20 },
          { sku: 'PIC-VEG-CHO-500', name: 'Vegan Chocolate & Raspberry 500ml', quantity: 6, unitPrice: 7.20 },
          { sku: 'PIC-VEG-VAN-2.5L', name: 'Vegan Vanilla Bean 2.5L', quantity: 3, unitPrice: 24.00 }
        ]
      },
      {
        id: 'ORD-2025-0332',
        orderNumber: 'ORD-2025-0332',
        customer: 'Holme Farm Shop',
        category: 'Ice Cream',
        orderDate: '2025-01-10T10:15:00',
        totalValue: 148.80,
        items: 18,
        status: 'delivered',
        notes: 'Mid-week top up',
        orderItems: [
          { sku: 'PIC-VAN-500', name: 'Vanilla Bean 500ml', quantity: 6, unitPrice: 6.50 },
          { sku: 'PIC-LEM-500', name: 'Lemon Ripple 500ml', quantity: 6, unitPrice: 6.50 },
          { sku: 'PIC-BER-500', name: 'Berries & Clotted Cream 500ml', quantity: 6, unitPrice: 6.80 }
        ]
      },
      {
        id: 'ORD-2025-0331',
        orderNumber: 'ORD-2025-0331',
        customer: 'The Pig on the Beach',
        category: 'Ice Cream',
        orderDate: '2025-01-08T09:00:00',
        totalValue: 324.00,
        items: 10,
        status: 'delivered',
        notes: 'Restaurant full restock',
        orderItems: [
          { sku: 'PIC-VAN-4L', name: 'Vanilla Bean 4L Napoli', quantity: 2, unitPrice: 32.00 },
          { sku: 'PIC-SAL-4L', name: 'Salted Caramel 4L Napoli', quantity: 2, unitPrice: 32.00 },
          { sku: 'PIC-CHO-4L', name: 'Serious Chocolate 4L Napoli', quantity: 2, unitPrice: 32.00 },
          { sku: 'PIC-GIN-4L', name: 'Stem Ginger 4L Napoli', quantity: 2, unitPrice: 34.00 },
          { sku: 'PIC-G&T-SOR-2L', name: 'Conker Gin & Tonic Sorbet 2L', quantity: 2, unitPrice: 26.00 }
        ]
      }
    ],

    // Available options
    allCustomers: ['The Pig on the Beach', 'Holme Farm Shop', 'Swanage Beach Cafe', 'Lulworth Cove Inn', 'Washingpool Farm Shop', 'Mortons House Hotel', "Trevor's Deli", 'Studland Bay House', 'The Castle Inn', 'Thyme & Tides'],

    // Filters
    searchQuery: '',
    filterCustomer: 'all',
    filterStatus: 'all',
    filterDateRange: 'all',

    // Modals
    orderDetailsModal: false,
    selectedOrder: null,

    // Success message
    successMessage: '',

    // Computed: Filtered orders
    get filteredOrders() {
      return this.orders.filter(order => {
        if (this.filterCustomer !== 'all' && order.customer !== this.filterCustomer) return false;
        if (this.filterStatus !== 'all' && order.status !== this.filterStatus) return false;

        if (this.filterDateRange !== 'all') {
          const orderDate = new Date(order.orderDate);
          const now = new Date();
          const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

          if (this.filterDateRange === 'today') {
            if (orderDate < today) return false;
          } else if (this.filterDateRange === 'week') {
            const weekAgo = new Date(today);
            weekAgo.setDate(weekAgo.getDate() - 7);
            if (orderDate < weekAgo) return false;
          } else if (this.filterDateRange === 'month') {
            const monthAgo = new Date(today);
            monthAgo.setMonth(monthAgo.getMonth() - 1);
            if (orderDate < monthAgo) return false;
          } else if (this.filterDateRange === 'quarter') {
            const quarterAgo = new Date(today);
            quarterAgo.setMonth(quarterAgo.getMonth() - 3);
            if (orderDate < quarterAgo) return false;
          }
        }

        if (this.searchQuery) {
          const query = this.searchQuery.toLowerCase();
          return order.orderNumber.toLowerCase().includes(query) ||
                 order.customer.toLowerCase().includes(query) ||
                 order.category.toLowerCase().includes(query) ||
                 order.id.toLowerCase().includes(query);
        }
        return true;
      });
    },

    // Methods
    viewOrderDetails(order) {
      this.selectedOrder = order;
      this.orderDetailsModal = true;
    },

    getStatusLabel(status) {
      const labels = {
        'ordered': 'Ordered',
        'shipped': 'Shipped',
        'delivered': 'Delivered'
      };
      return labels[status] || status;
    },

    updateOrderStatus(order, newStatus) {
      order.status = newStatus;
      this.showSuccess(`Order ${order.orderNumber} status updated to ${this.getStatusLabel(newStatus)}`);
    },

    getOrderItems(order) {
      return order.orderItems || [];
    },

    exportOrders() {
      const csvRows = [];
      // Header
      csvRows.push('Order Number,Customer,Category,Order Date,Total Value,Items,Status,Notes');

      // Data rows
      this.filteredOrders.forEach(order => {
        const orderDate = new Date(order.orderDate).toLocaleDateString();
        const notes = (order.notes || '').replace(/"/g, '""');
        csvRows.push(`${order.orderNumber},"${order.customer}","${order.category}",${orderDate},${order.totalValue},${order.items},${order.status},"${notes}"`);
      });

      const csvContent = csvRows.join('\n');
      const blob = new Blob([csvContent], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `orders-export-${new Date().toISOString().split('T')[0]}.csv`;
      a.click();
      window.URL.revokeObjectURL(url);
      this.showSuccess('Orders exported to CSV');
    },

    showSuccess(message) {
      this.successMessage = message;
      setTimeout(() => { this.successMessage = ''; }, 3000);
    },

    formatDate(dateStr) {
      const date = new Date(dateStr);
      const now = new Date();
      const diffMs = now - date;
      const diffDays = Math.floor(diffMs / 86400000);
      const diffHours = Math.floor(diffMs / 3600000);

      if (diffHours < 24) {
        if (diffHours < 1) return 'Just now';
        return diffHours + 'h ago';
      }
      if (diffDays < 7) return diffDays + 'd ago';
      return date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    }
  }));
});
