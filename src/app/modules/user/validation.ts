import { z } from 'zod';
import { bloodGroup, gender } from '../student/constants';

const userCreateZodSchema = z.object({
  body: z.object({
    // user: z.object({}),
    // role: z.string({ required_error: 'role is required' }),
    password: z.string().optional(),

    student: z.object({
      name: z.object({
        firstName: z.string({ required_error: 'First name is required' }),
        lastName: z.string({ required_error: 'Last name is required' }),
        middleName: z.string().optional(),
      }),

      dateOfBirth: z.string({ required_error: 'Date of Birth is required' }),

      email: z.string({ required_error: 'Email is required' }).email(),

      gender: z.enum([...gender] as [string, ...string[]], {
        required_error: 'Gender is required',
      }),

      bloodGroup: z.enum([...bloodGroup] as [string, ...string[]]).optional(),

      contactNo: z.string({ required_error: 'Contact number is required' }),

      emergencyContactNo: z.string({
        required_error: 'Emergency contact number is required',
      }),

      presentAddress: z.string({
        required_error: 'Present address is required',
      }),

      permanentAddress: z.string({
        required_error: 'Permanent address is required',
      }),

      guardian: z.object({
        fatherName: z.string({ required_error: 'Father name is required' }),
        fatherOccupation: z.string({
          required_error: 'Father occupation is required',
        }),
        fatherContactNo: z.string({
          required_error: 'Father contact-no is required',
        }),
        motherName: z.string({ required_error: 'Mother name is required' }),
        motherOccupation: z.string({
          required_error: 'Mother occupation is required',
        }),
        motherContactNo: z.string({
          required_error: 'Mother contact-no is required',
        }),
        address: z.string({ required_error: 'Address is required' }),
      }),

      localGuardian: z.object({
        name: z.string({ required_error: 'Local guardian name is required' }),
        occupation: z.string({
          required_error: 'Local guardian occupation is required',
        }),
        contactNo: z.string({
          required_error: 'Local guardian contact-no is required',
        }),
        address: z.string({
          required_error: 'Local guardian address is required',
        }),
      }),

      academicDepartment: z.string({
        required_error: 'Academic department is required',
      }),
      academicSemester: z.string({
        required_error: 'Academic semester is required',
      }),
      academicFaculty: z.string({
        required_error: 'Academic faculty is required',
      }),

      profileImg: z.string().optional(),
    }),
  }),
});

const createFacultyZodSchema = z.object({
  body: z.object({
    password: z.string().optional(),

    faculty: z.object({
      name: z.object({
        firstName: z.string({ required_error: 'First name is required' }),
        lastName: z.string({ required_error: 'Last name is required' }),
        middleName: z.string().optional(),
      }),

      gender: z.string({ required_error: 'Gender is required' }),
      dateOfBirth: z.string({ required_error: 'Date of birth is required' }),
      email: z.string({ required_error: 'Email is required' }).email(),
      contactNo: z.string({ required_error: 'Contact number is required' }),

      emergencyContactNo: z.string({
        required_error: 'Emergency contact number is required',
      }),

      bloodGroup: z
        .string({ required_error: 'Blood group is required' })
        .optional(),

      presentAddress: z.string({
        required_error: 'Present address is required',
      }),
      permanentAddress: z.string({
        required_error: 'Permanent address is required',
      }),

      academicDepartment: z.string({
        required_error: 'Academic department is required',
      }),
      academicFaculty: z.string({
        required_error: 'Academic faculty is required',
      }),

      designation: z.string({ required_error: 'Designation is required' }),

      profileImage: z.string().optional(),
    }),
  }),
});

export const userValidation = {
  userCreateZodSchema,
  createFacultyZodSchema,
};
