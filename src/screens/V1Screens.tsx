import {
  AvailabilitySlotCard,
  BookingStatusBlock,
  BookingSummaryCard,
  FilterChip,
  MessageBubbleMine,
  MessageBubbleTheirs,
  MetricCard,
  PaymentStatusBanner,
  PrimaryButton,
  ProviderCard,
  SearchField,
  SecondaryButton,
  ServiceCard,
  TextField,
  ThreadListItem,
  TopAppBar,
  UploadDocumentCard,
  VerificationStatusBanner
} from '../components'
import { availabilitySlots, booking, metrics, mockUser, payment, providers, services, threads } from '../mocks/v1'

const shell = 'mx-auto w-full max-w-md px-4 pb-24 pt-4 space-y-4'

export function LoginScreen(): JSX.Element {
  return (
    <main>
      <TopAppBar title="Login" subtitle="Access GLOBALYS" />
      <section className={shell}>
        <TextField label="Work email" placeholder="you@company.com" />
        <TextField label="Password" placeholder="••••••••" type="password" />
        <PrimaryButton fullWidth>Sign in</PrimaryButton>
      </section>
    </main>
  )
}

export function RegisterScreen(): JSX.Element {
  return (
    <main>
      <TopAppBar title="Register" subtitle="Create your organization account" />
      <section className={shell}>
        <TextField label="Full name" placeholder="Alex Morgan" />
        <TextField label="Company" placeholder="Northbridge Logistics" />
        <TextField label="Work email" placeholder="you@company.com" />
        <TextField label="Password" type="password" placeholder="••••••••" />
        <PrimaryButton fullWidth>Create account</PrimaryButton>
      </section>
    </main>
  )
}

export function DiscoveryHomeScreen(): JSX.Element {
  return (
    <main>
      <TopAppBar title="Discovery" subtitle="Find services and providers" />
      <section className={shell}>
        <SearchField />
        {services.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </section>
    </main>
  )
}

export function SearchFiltersResultsScreen(): JSX.Element {
  return (
    <main>
      <TopAppBar title="Search" subtitle="Filters and results" />
      <section className={shell}>
        <SearchField />
        <div className="flex flex-wrap gap-2">
          <FilterChip selected>Compliance</FilterChip>
          <FilterChip>Advisory</FilterChip>
          <FilterChip>Verified only</FilterChip>
        </div>
        {providers.map((provider) => (
          <ProviderCard key={provider.id} {...provider} />
        ))}
      </section>
    </main>
  )
}

export function ServiceDetailScreen(): JSX.Element {
  const service = services[0]
  const provider = providers[0]

  return (
    <main>
      <TopAppBar title="Service Detail" subtitle={service.title} />
      <section className={shell}>
        <ServiceCard {...service} />
        <ProviderCard {...provider} />
        <PrimaryButton fullWidth>Book service</PrimaryButton>
      </section>
    </main>
  )
}

export function BookingCreateScreen(): JSX.Element {
  return (
    <main>
      <TopAppBar title="Booking Create" subtitle="Schedule your engagement" />
      <section className={shell}>
        <TextField label="Service" value={booking.serviceName} readOnly />
        <TextField label="Provider" value={booking.providerName} readOnly />
        {availabilitySlots.map((slot) => (
          <AvailabilitySlotCard key={slot.id} date={slot.date} timeRange={slot.timeRange} status={slot.status} />
        ))}
        <PrimaryButton fullWidth>Confirm booking</PrimaryButton>
      </section>
    </main>
  )
}

export function BookingDetailScreen(): JSX.Element {
  return (
    <main>
      <TopAppBar title="Booking Detail" subtitle={booking.bookingId} />
      <section className={shell}>
        <BookingStatusBlock status="booked" title="Booking confirmed" description="Your provider is scheduled and ready." />
        <BookingSummaryCard {...booking} />
      </section>
    </main>
  )
}

export function PaymentStatusResultScreen(): JSX.Element {
  return (
    <main>
      <TopAppBar title="Payment Status" subtitle="Transaction result" />
      <section className={shell}>
        <PaymentStatusBanner status={payment.status} amountLabel={payment.amount} message={payment.message} />
        <PrimaryButton fullWidth>Download receipt</PrimaryButton>
      </section>
    </main>
  )
}

export function ChatThreadsScreen(): JSX.Element {
  return (
    <main>
      <TopAppBar title="Chat Threads" subtitle="Operational conversations" />
      <section className={shell}>
        {threads.map((thread) => (
          <ThreadListItem key={thread.id} name={thread.name} preview={thread.preview} timestamp={thread.timestamp} unread={thread.unread} />
        ))}
      </section>
    </main>
  )
}

export function ChatDetailScreen(): JSX.Element {
  return (
    <main>
      <TopAppBar title="Chat Detail" subtitle="Nadia Chen" />
      <section className={shell}>
        <div className="space-y-2">
          <MessageBubbleTheirs text="Please confirm the shipment invoice and packing list." time="09:11" />
          <MessageBubbleMine text="Confirmed. Uploading final files now." time="09:12" />
        </div>
        <TextField label="Message" placeholder="Write a message" />
      </section>
    </main>
  )
}

export function ProfileVerificationScreen(): JSX.Element {
  return (
    <main>
      <TopAppBar title="Profile & Verification" subtitle={mockUser.name} />
      <section className={shell}>
        <VerificationStatusBanner status="verified" title="Verification complete" subtitle="Your organization is verified." />
        <UploadDocumentCard title="Business License" description="Upload current business registration document." uploadedFileName="license_2026.pdf" />
      </section>
    </main>
  )
}

export function ClientDashboardScreen(): JSX.Element {
  return (
    <main>
      <TopAppBar title="Client Dashboard" subtitle="Operational overview" />
      <section className={shell}>
        {metrics.client.map((metric) => (
          <MetricCard key={metric.label} {...metric} />
        ))}
        <BookingSummaryCard {...booking} />
      </section>
    </main>
  )
}

export function ProviderDashboardScreen(): JSX.Element {
  return (
    <main>
      <TopAppBar title="Provider Dashboard" subtitle="Performance & workload" />
      <section className={shell}>
        {metrics.provider.map((metric) => (
          <MetricCard key={metric.label} {...metric} />
        ))}
        <PaymentStatusBanner status="pending" amountLabel="$520.00" message="Payout processing" />
      </section>
    </main>
  )
}

export function ProviderServiceEditorScreen(): JSX.Element {
  return (
    <main>
      <TopAppBar title="Service Editor" subtitle="Manage provider offering" />
      <section className={shell}>
        <TextField label="Service title" defaultValue="Customs Clearance Review" />
        <TextField label="Category" defaultValue="Compliance" />
        <TextField label="Rate" defaultValue="$180 / engagement" />
        <div className="flex gap-2">
          <SecondaryButton className="flex-1">Save draft</SecondaryButton>
          <PrimaryButton className="flex-1">Publish</PrimaryButton>
        </div>
      </section>
    </main>
  )
}

export function ProviderAvailabilityManagerScreen(): JSX.Element {
  return (
    <main>
      <TopAppBar title="Availability Manager" subtitle="Set capacity and slots" />
      <section className={shell}>
        {availabilitySlots.map((slot) => (
          <AvailabilitySlotCard key={slot.id} date={slot.date} timeRange={slot.timeRange} status={slot.status} />
        ))}
        <div className="flex gap-2">
          <SecondaryButton className="flex-1">Clear day</SecondaryButton>
          <PrimaryButton className="flex-1">Save schedule</PrimaryButton>
        </div>
      </section>
    </main>
  )
}
