from django.db import models
from django.contrib.auth import validators
from django.contrib import auth


class ClaimType(models.Model):
    name = models.CharField( help_text='Required. 30 characters or fewer. Letters, digits and @/./+/-/_ only.',
        max_length=30, verbose_name='claim type', validators=[validators.UnicodeUsernameValidator()], primary_key=True)
    description = models.TextField(max_length=1000, help_text='Enter a brief description of the claim type')

    # Metadata
    class Meta:
        ordering = ['name']

    def __str__(self):
        return self.name


class SubmissionType(models.Model):
    name = models.CharField( help_text='Required. 30 characters or fewer. Letters, digits and @/./+/-/_ only.', 
        max_length=30, verbose_name='submission type', validators=[validators.UnicodeUsernameValidator()], primary_key=True)
    description = models.TextField(max_length=1000, help_text='Enter a brief description of the submission type')

    # Metadata
    class Meta:
        ordering = ['name']

    def __str__(self):
        return self.name


class Status(models.Model):
    name = models.CharField( help_text='Required. 30 characters or fewer. Letters, digits and @/./+/-/_ only.', 
        max_length=30, verbose_name='status', validators=[validators.UnicodeUsernameValidator()], primary_key=True)
    description = models.TextField(max_length=1000, help_text='Enter a brief description of the status')

    # Metadata
    class Meta:
        ordering = ['name']

    def __str__(self):
        return self.name        


class Dealership(models.Model):
    name = models.CharField( help_text='Required. 30 characters or fewer. Letters, digits and @/./+/-/_ only.', 
        max_length=30, verbose_name='dealership name', validators=[validators.UnicodeUsernameValidator()], primary_key=True)
    description = models.TextField(max_length=1000, help_text='Enter a brief description of the dealership')

    # Metadata
    class Meta:
        ordering = ['name']

    def __str__(self):
        return self.name  


class ServiceAdvisor(models.Model):
    id = models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)
    name = models.CharField( help_text='Required. 30 characters or fewer. Letters, digits and @/./+/-/_ only.',
        max_length=30, verbose_name='service advisor name', validators=[validators.UnicodeUsernameValidator()], )
    # dealership = models.ForeignKey('dealership', on_delete=models.CASCADE, verbose_name='dealership name', null=True) 

    # Metadata
    class Meta:
        ordering = ['name']

    def __str__(self):
        return self.id 


class Technician(models.Model):
    id = models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)
    name = models.CharField( help_text='Required. 30 characters or fewer. Letters, digits and @/./+/-/_ only.',
        max_length=30, verbose_name='technician name', validators=[validators.UnicodeUsernameValidator()], )
    # dealership = models.ForeignKey('dealership', on_delete=models.CASCADE, verbose_name='dealership name', null=True) 

    # Metadata
    class Meta:
        ordering = ['name']

    def __str__(self):
        return self.id  


class Claim(models.Model):
    id = models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)
    repair_order = models.IntegerField( help_text='Enter Repair Order Number')
    pdf = models.CharField( max_length=100, verbose_name='PDF file name' )
    dealership = models.ForeignKey(Dealership, on_delete=models.CASCADE, verbose_name='dealership name', null=True) 
    service_advisor = models.ForeignKey(ServiceAdvisor, on_delete=models.CASCADE, verbose_name='service advisor name', null=True) 
    technician = models.ForeignKey(Technician, on_delete=models.CASCADE, verbose_name='technician name', null=True) 
    claim_type = models.ForeignKey(ClaimType, on_delete=models.CASCADE, verbose_name='claim type', null=True) 
    submission_type = models.ForeignKey(SubmissionType, on_delete=models.CASCADE, verbose_name='submission type', null=True) 

    # Metadata
    class Meta:
        ordering = ['dealership', 'repair_order']

    def __str__(self):
        return self.id   


# class UserDealership(models.Model):
#     id = models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)
#     user = models.ForeignKey('auth.user', on_delete=models.CASCADE, verbose_name='user ID', null=True) 
#     dealership = models.ForeignKey(Dealership, on_delete=models.CASCADE, verbose_name='dealership name', null=True) 

#     # Metadata
#     class Meta:
#         ordering = ['user', 'dealership']

#     def __str__(self):
#         return self.id    
                                    