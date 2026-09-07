from django.core.management.base import BaseCommand
from nadein_board.automation.engine import dispatch_scheduled_automations


class Command(BaseCommand):
    help = "Run due board automations once. Invoke every minute using your scheduler."

    def handle(self, *args, **options):
        count = dispatch_scheduled_automations()
        self.stdout.write(f"Processed {count} scheduled task runs.")
