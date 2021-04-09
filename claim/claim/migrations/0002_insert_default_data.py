from django.db import migrations

def initial_group(apps, schema_editor):
    Group = apps.get_model('auth', 'Group')
    groups = ['super_admin', 'dealership_admin', 'dealership_user']
    for group_name in groups:
        group = Group(name=group_name)
        group.save()


def initial_status(apps, schema_editor):
    Status = apps.get_model('claim', 'Status')
    statuses = ['New', 'Updated', 'Unresolved', 'Pending', 'Risk']
    for status_name in statuses:
        status = Status(name=status_name)
        status.save()


def initial_claim_type(apps, schema_editor):
    ClaimType = apps.get_model('claim', 'ClaimType')
    claim_types = ['Repair', 'Recall', 'Maintenance', 'PDI']
    for claim_type_name in claim_types:
        claim_type = ClaimType(name=claim_type_name)
        claim_type.save()


def initial_submission_type(apps, schema_editor):
    SubmissionType = apps.get_model('claim', 'SubmissionType')
    submission_types = ['Initial', 'Rework']
    for submission_type_name in submission_types:
        submission_type = SubmissionType(name=submission_type_name)
        submission_type.save()



class Migration(migrations.Migration):

    dependencies = [
        ('claim', '0001_initial'),
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.RunPython(initial_group),
        migrations.RunPython(initial_status),
        migrations.RunPython(initial_claim_type),
        migrations.RunPython(initial_submission_type),
    ]