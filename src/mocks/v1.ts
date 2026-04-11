export const mockUser = {
  name: 'Alex Morgan',
  email: 'alex@globalys.co',
  company: 'Northbridge Logistics',
  role: 'Client Operations Lead',
  verified: true
}

export const services = [
  {
    id: 'svc-101',
    title: 'Customs Clearance Review',
    category: 'Compliance',
    description: 'End-to-end document and declaration review for cross-border shipments.',
    rateLabel: '$180 / engagement',
    status: 'available' as const
  },
  {
    id: 'svc-102',
    title: 'Freight Cost Optimization',
    category: 'Advisory',
    description: 'Quarterly lane-level optimization with carrier and mode recommendations.',
    rateLabel: '$240 / session',
    status: 'booked' as const
  }
]

export const providers = [
  { id: 'prv-1', name: 'Nadia Chen', specialty: 'Trade Compliance', rating: '4.9', status: 'verified' as const },
  { id: 'prv-2', name: 'Marco Ruiz', specialty: 'Freight Advisory', rating: '4.8', status: 'active' as const }
]

export const booking = {
  bookingId: 'BK-20481',
  serviceName: 'Customs Clearance Review',
  providerName: 'Nadia Chen',
  dateTimeLabel: 'Mon, Apr 14 · 10:00–11:00',
  amountLabel: '$180.00',
  status: 'booked' as const
}

export const payment = {
  status: 'paid' as const,
  amount: '$180.00',
  message: 'Payment settled and receipt issued.'
}

export const threads = [
  { id: 'th-1', name: 'Nadia Chen', preview: 'I have reviewed your HS codes.', timestamp: '09:12', unread: true },
  { id: 'th-2', name: 'Marco Ruiz', preview: 'Uploaded revised pricing model.', timestamp: 'Yesterday', unread: false }
]

export const metrics = {
  client: [
    { label: 'Active Bookings', value: '12', trend: '+2 this week', trendState: 'success' as const },
    { label: 'Pending Payments', value: '3', trend: '-1 this week', trendState: 'default' as const }
  ],
  provider: [
    { label: 'Live Services', value: '8', trend: '+1 this week', trendState: 'success' as const },
    { label: 'Response SLA', value: '98%', trend: '-1%', trendState: 'error' as const }
  ]
}

export const availabilitySlots = [
  { id: 'sl-1', date: 'Apr 14', timeRange: '10:00 – 11:00', status: 'available' as const },
  { id: 'sl-2', date: 'Apr 14', timeRange: '11:30 – 12:30', status: 'booked' as const },
  { id: 'sl-3', date: 'Apr 14', timeRange: '14:00 – 15:00', status: 'full' as const }
]
