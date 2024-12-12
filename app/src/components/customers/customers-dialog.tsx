import CustomersTable from '@/components/customers/customers-table'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

type CustomersDialogProps = {
  children: React.ReactNode
}

export function CustomersDialog({ children }: CustomersDialogProps) {
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Clientes</DialogTitle>
          <DialogDescription>
            <CustomersTable />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
