# Generated by Django 3.0.7 on 2021-05-29 11:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('actions', '0013_referral_referral_organisation'),
    ]

    operations = [
        migrations.AlterField(
            model_name='referral',
            name='referral_status',
            field=models.CharField(choices=[('1', 'Referral org. chosen '), ('2', 'Referral org. contacted'), ('3', 'Referral complete')], default='1', help_text="What's the status of this action?", max_length=1),
        ),
    ]
