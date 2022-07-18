from django.contrib.auth.tokens import PasswordResetTokenGenerator
from six import text_type
class AppTokenGenerator(PasswordResetTokenGenerator):
    def _make_hash_value(self, user, timestamp):
        return (text_type(user.is_active)+text_type(user.pk)+text_type(timestamp))
        # return six.text_type(user.username) + six.text_type(user.pk)+six.text_type(timestamp)
account_activation_token = AppTokenGenerator()