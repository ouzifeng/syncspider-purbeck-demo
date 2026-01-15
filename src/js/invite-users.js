document.addEventListener('alpine:init', () => {
  Alpine.data('inviteUsers', () => ({
    // State
    allCustomers: ['Hugo Boss', 'Adidas UK', 'Nike Europe'],

    newInvite: {
      email: '',
      firstName: '',
      lastName: '',
      customer: '',
      role: ''
    },

    allInvites: [
      {
        id: 'INV-001',
        email: 'sarah.mitchell@hugoboss.com',
        firstName: 'Sarah',
        lastName: 'Mitchell',
        customer: 'Hugo Boss',
        role: 'Buyer',
        sentDate: '2025-01-05T10:30:00',
        status: 'accepted'
      },
      {
        id: 'INV-002',
        email: 'marcus.webb@adidas.co.uk',
        firstName: 'Marcus',
        lastName: 'Webb',
        customer: 'Adidas UK',
        role: 'Buyer',
        sentDate: '2025-01-04T14:20:00',
        status: 'accepted'
      },
      {
        id: 'INV-003',
        email: 'jennifer.clarke@hugoboss.com',
        firstName: 'Jennifer',
        lastName: 'Clarke',
        customer: 'Hugo Boss',
        role: 'Approver',
        sentDate: '2025-01-02T11:15:00',
        status: 'accepted'
      },
      {
        id: 'INV-004',
        email: 'jan.devries@nike.com',
        firstName: 'Jan',
        lastName: 'de Vries',
        customer: 'Nike Europe',
        role: 'Buyer',
        sentDate: '2024-12-28T16:45:00',
        status: 'accepted'
      },
      {
        id: 'INV-005',
        email: 'emma.richardson@adidas.co.uk',
        firstName: 'Emma',
        lastName: 'Richardson',
        customer: 'Adidas UK',
        role: 'Approver',
        sentDate: '2024-12-22T10:30:00',
        status: 'accepted'
      },
      {
        id: 'INV-006',
        email: 'thomas.mueller@hugoboss.com',
        firstName: 'Thomas',
        lastName: 'Mueller',
        customer: 'Hugo Boss',
        role: 'Admin',
        sentDate: '2025-01-03T09:00:00',
        status: 'pending'
      },
      {
        id: 'INV-007',
        email: 'sophie.martin@nike.com',
        firstName: 'Sophie',
        lastName: 'Martin',
        customer: 'Nike Europe',
        role: 'Approver',
        sentDate: '2025-01-02T15:30:00',
        status: 'pending'
      },
      {
        id: 'INV-008',
        email: 'david.thompson@adidas.co.uk',
        firstName: 'David',
        lastName: 'Thompson',
        customer: 'Adidas UK',
        role: 'Buyer',
        sentDate: '2024-12-20T11:00:00',
        status: 'expired'
      }
    ],

    successMessage: '',

    // Computed
    get pendingInvites() {
      return this.allInvites.filter(invite => invite.status === 'pending');
    },

    // Methods
    sendInvitation() {
      if (!this.newInvite.email || !this.newInvite.firstName || !this.newInvite.lastName || !this.newInvite.customer || !this.newInvite.role) {
        alert('Please fill in all required fields');
        return;
      }

      const newInvitation = {
        id: 'INV-' + String(this.allInvites.length + 1).padStart(3, '0'),
        email: this.newInvite.email,
        firstName: this.newInvite.firstName,
        lastName: this.newInvite.lastName,
        customer: this.newInvite.customer,
        role: this.newInvite.role,
        sentDate: new Date().toISOString(),
        status: 'pending'
      };

      this.allInvites.unshift(newInvitation);

      this.showSuccess(`Invitation sent to ${this.newInvite.email}`);

      // Reset form
      this.newInvite = {
        email: '',
        firstName: '',
        lastName: '',
        customer: '',
        role: ''
      };
    },

    resendInvitation(invite) {
      invite.sentDate = new Date().toISOString();
      this.showSuccess(`Invitation resent to ${invite.email}`);
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
