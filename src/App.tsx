import {
  BookingCreateScreen,
  BookingDetailScreen,
  ChatDetailScreen,
  ChatThreadsScreen,
  ClientDashboardScreen,
  DiscoveryHomeScreen,
  LoginScreen,
  PaymentStatusResultScreen,
  ProfileVerificationScreen,
  ProviderAvailabilityManagerScreen,
  ProviderDashboardScreen,
  ProviderServiceEditorScreen,
  RegisterScreen,
  SearchFiltersResultsScreen,
  ServiceDetailScreen
} from './screens/V1Screens'

const routes: Record<string, () => JSX.Element> = {
  '/': LoginScreen,
  '/login': LoginScreen,
  '/register': RegisterScreen,
  '/discovery-home': DiscoveryHomeScreen,
  '/search-filters-results': SearchFiltersResultsScreen,
  '/service-detail': ServiceDetailScreen,
  '/booking-create': BookingCreateScreen,
  '/booking-detail': BookingDetailScreen,
  '/payment-status-result': PaymentStatusResultScreen,
  '/chat-threads': ChatThreadsScreen,
  '/chat-detail': ChatDetailScreen,
  '/profile-verification': ProfileVerificationScreen,
  '/client-dashboard': ClientDashboardScreen,
  '/provider-dashboard': ProviderDashboardScreen,
  '/provider-service-editor': ProviderServiceEditorScreen,
  '/provider-availability-manager': ProviderAvailabilityManagerScreen
}

const viewLinks = Object.keys(routes).filter((path) => path !== '/')

export default function App(): JSX.Element {
  const path = window.location.pathname
  const Screen = routes[path] ?? LoginScreen

  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-on-background)]">
      <div className="mx-auto w-full max-w-md">
        <div className="sticky top-0 z-30 border-b border-[var(--color-outline-variant)] bg-[var(--color-surface)] p-3">
          <p className="mb-2 text-xs font-semibold text-[var(--color-on-surface-variant)]">V1 Views</p>
          <div className="flex gap-2 overflow-x-auto pb-1">
            {viewLinks.map((link) => (
              <a
                key={link}
                href={link}
                className="whitespace-nowrap rounded-[var(--radius-xs)] border border-[var(--color-outline-variant)] bg-[var(--color-surface-container-low)] px-2 py-1 text-xs"
              >
                {link.replace('/', '')}
              </a>
            ))}
          </div>
        </div>
      </div>
      <Screen />
    </div>
  )
}
